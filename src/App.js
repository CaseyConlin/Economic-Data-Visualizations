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
import { AutoTooltip } from "./Tooltip";
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
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
      <Typography
        sx={{ fontSize: 18, fontWeight: 800 }}
        variant="h2"
        component="div"
        display="flex"
        alignContent="start"
        justifyContent="center"
        gutterBottom
      >
        Consumer Auto Data 1992 to Present{"  "}{" "}
      </Typography>
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
            activeDot={{ stroke: "black", strokeWidth: 3, r: 5 }}
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
                activeDot={{ stroke: "purple", strokeWidth: 3, r: 5 }}
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
                activeDot={{ stroke: "blue", strokeWidth: 3, r: 5 }}
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
                activeDot={{ stroke: "purple", strokeWidth: 3, r: 5 }}
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
                activeDot={{ stroke: "green", strokeWidth: 3, r: 5 }}
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
                activeDot={{ stroke: "orange", strokeWidth: 3, r: 5 }}
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
                activeDot={{ stroke: "red", strokeWidth: 3, r: 5 }}
              />
            </>
          )}
          <Tooltip content={<AutoTooltip />} cursor={{ fill: "transparent" }} />

          <Legend
            align="center"
            wrapperStyle={{
              bottom: 0,
              paddingTop: 10,
            }}
          />

          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            data={usedAutoIndexPriceData}
            tickFormatter={(tickItem) => {
              return new Date(tickItem).getFullYear();
            }}
            interval={25}
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
