import "./App.css";
import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  fourYearAutoLoan,
  autoLoanFinanceAmount,
  usedAutoSales,
  retailAutoSales,
  usedAutoIndexPrice,
  newAutoIndexPrice,
  consumerPriceIndex,
} from "./Data";
import Container from "@mui/material/Container";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { spacing } from "@mui/system";

const App = () => {
  const [showUsedCars, setShowUsedCars] = useState(false);
  const [showNewCars, setShowNewCars] = useState(false);
  const [showConsumerAutoFinance, setShowConsumerAutoFinance] = useState(false);

  const fourYearAutoLoanData = fourYearAutoLoan.observations;
  const autoLoanFinanceAmountData = autoLoanFinanceAmount.observations;
  const usedAutoSalesData = usedAutoSales.observations;
  const retailAutoSalesData = retailAutoSales.observations;
  const usedAutoIndexPriceData = usedAutoIndexPrice.observations;
  const newAutoIndexPriceData = newAutoIndexPrice.observations;
  const consumerPriceIndexPrice = consumerPriceIndex.observations;

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 6,
      }}
    >
      <DirectionsCarFilledIcon />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            variant={showUsedCars ? "contained" : "outlined"}
            onClick={() => {
              setShowUsedCars(!showUsedCars);
            }}
          >
            Used Cars
          </Button>
          <Button
            variant={showNewCars ? "contained" : "outlined"}
            onClick={() => {
              setShowNewCars(!showNewCars);
            }}
          >
            New Cars
          </Button>
          <Button
            variant={showConsumerAutoFinance ? "contained" : "outlined"}
            onClick={() => {
              setShowConsumerAutoFinance(!showConsumerAutoFinance);
            }}
          >
            Cosumer Auto Finance
          </Button>
        </ButtonGroup>
      </Box>

      <ResponsiveContainer width="95%" height={400}>
        <LineChart>
          <Line
            type="monotone"
            data={consumerPriceIndexPrice}
            dataKey={"value"}
            stroke="black"
            dot={false}
            connectNulls
            name="Consumer Price Index"
            yAxisId="right"
            xAxisId="xAxis"
            activeDot={{ stroke: "black", strokeWidth: 2, r: 5 }}
          />
          {showUsedCars && (
            <>
              <Line
                type="monotone"
                data={usedAutoIndexPriceData}
                dataKey={"value"}
                stroke="purple"
                dot={false}
                connectNulls
                name="Used Auto CPI"
                yAxisId="right"
                xAxisId="xAxis"
                activeDot={{ stroke: "purple", strokeWidth: 2, r: 5 }}
              />
              <Line
                type="monotone"
                data={usedAutoSalesData}
                dataKey={"value"}
                stroke="blue"
                dot={false}
                name="Used Auto Sales (Millions - USD)"
                yAxisId="left"
                xAxisId="xAxis"
                activeDot={{ stroke: "blue", strokeWidth: 2, r: 5 }}
              />
            </>
          )}

          {showNewCars && (
            <>
              <Line
                type="monotone"
                data={newAutoIndexPriceData}
                dataKey={"value"}
                stroke="teal"
                dot={false}
                connectNulls
                name="New Auto CPI"
                yAxisId="right"
                xAxisId="xAxis"
                activeDot={{ stroke: "purple", strokeWidth: 2, r: 5 }}
              />
              <Line
                type="monotone"
                data={retailAutoSalesData}
                dataKey={"value"}
                stroke="green"
                dot={false}
                name="New Auto Sales (Millions - USD)"
                yAxisId="left"
                xAxisId="xAxis"
                activeDot={{ stroke: "green", strokeWidth: 2, r: 5 }}
              />
            </>
          )}
          {showConsumerAutoFinance && (
            <>
              <Line
                type="monotone"
                data={fourYearAutoLoanData}
                dataKey={"value"}
                stroke="orange"
                dot={false}
                connectNulls
                name="Auto Loan Rate (Percent)"
                yAxisId="right"
                xAxisId="xAxis"
                activeDot={{ stroke: "orange", strokeWidth: 2, r: 5 }}
              />
              <Line
                type="monotone"
                data={autoLoanFinanceAmountData}
                dataKey={"value"}
                connectNulls
                stroke="red"
                name="Finance Amount (USD)"
                yAxisId="left"
                xAxisId="xAxis"
                dot={false}
                activeDot={{ stroke: "red", strokeWidth: 2, r: 5 }}
              />
            </>
          )}
          <Tooltip
            formatter={(value) => new Intl.NumberFormat("en").format(value)}
            wrapperStyle={{ width: 100, backgroundColor: "red" }}
          />
          {/* <Legend
          width={100}
          wrapperStyle={{
            top: 20,
            right: 20,
            height: "200px",
            width: "60px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        /> */}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            data={usedAutoIndexPriceData}
            dataKey="date"
            xAxisId="xAxis"
            allowDuplicatedCategory={false}
          />

          <YAxis
            dataKey="value"
            data={autoLoanFinanceAmountData}
            domain={[0, 110000]}
            yAxisId="left"
          />
          <YAxis
            dataKey="value"
            data={fourYearAutoLoanData}
            orientation="right"
            domain={[0, 315]}
            yAxisId="right"
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default App;
