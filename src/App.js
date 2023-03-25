import "./App.css";
import { useState } from "react";
import {
  LineChart,
  Line,
  Bar,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AutoTooltip } from "./Tooltip";
import { renderLegend } from "./Legend";
import {
  fourYearAutoLoan,
  autoLoanFinanceAmount,
  usedAutoSales,
  retailAutoSales,
  usedAutoIndexPrice,
  newAutoIndexPrice,
  consumerPriceIndex,
} from "./AutoData";
import {
  totalHousingUnits,
  vacantHousingUnits,
  ownerOccupiedHousingUnits,
  renterOccupiedHousingUnits,
  medianHomeSalePrice,
  rentCPI,
} from "./HousingData";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const App = () => {
  const [showUsedCars, setShowUsedCars] = useState(false);
  const [showNewCars, setShowNewCars] = useState(false);
  const [showConsumerAutoFinance, setShowConsumerAutoFinance] = useState(false);
  const [showHousingRenter, setShowHousingRenter] = useState(false);
  const [showHousingOwner, setShowHousingOwner] = useState(true);

  const fourYearAutoLoanData = fourYearAutoLoan.observations;
  const autoLoanFinanceAmountData = autoLoanFinanceAmount.observations;
  const usedAutoSalesData = usedAutoSales.observations;
  const retailAutoSalesData = retailAutoSales.observations;
  const usedAutoIndexPriceData = usedAutoIndexPrice.observations;
  const newAutoIndexPriceData = newAutoIndexPrice.observations;
  const consumerPriceIndexPrice = consumerPriceIndex.observations;

  const compileData = (...array) => {
    const compiledArray = [];

    const quarterMonths = [2, 5, 8, 11];

    array.map((dataPoint) => {
      dataPoint.observations.map((observation) => {
        const obj = { date: observation.date };
        const month = new Date(obj.date).getMonth();

        if (!quarterMonths.includes(month)) return compiledArray;

        const index = compiledArray.findIndex(
          (element) => element.date === obj.date
        );
        if (index === -1) {
          obj[dataPoint.id] = observation.value;
          return compiledArray.push(obj);
        } else {
          return (compiledArray[index][dataPoint.id] = observation.value);
        }
      });
      return compiledArray;
    });

    return compiledArray;
  };
  // const medianHomeSalePriceData = medianHomeSalePrice.observations;

  const housingStackData = compileData(
    totalHousingUnits,
    vacantHousingUnits,
    renterOccupiedHousingUnits,
    ownerOccupiedHousingUnits,
    medianHomeSalePrice,
    rentCPI
  );

  return (
    <Grid container maxWidth="xlg" rowSpacing={1}>
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          mt: 6,
          mb: 5,
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
          Consumer Auto Data 1992 to Present
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

        <ResponsiveContainer width="100%" height={400}>
          <LineChart>
            <Line
              type="monotone"
              data={consumerPriceIndexPrice}
              dataKey={"value"}
              stroke="black"
              strokeWidth={2}
              dot={false}
              iconType="line"
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
                  stroke="#b33207"
                  strokeWidth={2}
                  dot={false}
                  connectNulls
                  name="Used Auto CPI"
                  yAxisId="right"
                  xAxisId="xAxis"
                  activeDot={{ stroke: "#b33207", strokeWidth: 3, r: 5 }}
                />
                <Line
                  type="monotone"
                  data={usedAutoSalesData}
                  dataKey={"value"}
                  stroke="#de663e"
                  strokeWidth={2}
                  dot={false}
                  name="Used Auto Sales-$M"
                  yAxisId="left"
                  xAxisId="xAxis"
                  activeDot={{ stroke: "#de663e", strokeWidth: 3, r: 5 }}
                />
              </>
            )}

            {showNewCars && (
              <>
                <Line
                  type="monotone"
                  data={newAutoIndexPriceData}
                  dataKey={"value"}
                  stroke="#4c90ba"
                  dot={false}
                  strokeWidth={2}
                  connectNulls
                  name="New Auto CPI"
                  yAxisId="right"
                  xAxisId="xAxis"
                  activeDot={{ stroke: "#4c90ba", strokeWidth: 3, r: 5 }}
                />
                <Line
                  type="monotone"
                  data={retailAutoSalesData}
                  dataKey={"value"}
                  stroke="#2bc2c2"
                  strokeWidth={2}
                  dot={false}
                  name="New Auto Sales-$M"
                  yAxisId="left"
                  xAxisId="xAxis"
                  activeDot={{ stroke: "#2bc2c2", strokeWidth: 3, r: 5 }}
                />
              </>
            )}
            {showConsumerAutoFinance && (
              <>
                <Line
                  type="monotone"
                  data={fourYearAutoLoanData}
                  dataKey={"value"}
                  stroke="#00994c"
                  strokeWidth={2}
                  dot={false}
                  connectNulls
                  name="Auto Loan Rate (%)"
                  yAxisId="right"
                  xAxisId="xAxis"
                  activeDot={{ stroke: "#00994c", strokeWidth: 3, r: 5 }}
                />
                <Line
                  type="monotone"
                  data={autoLoanFinanceAmountData}
                  dataKey={"value"}
                  connectNulls
                  stroke="#006a35"
                  strokeWidth={2}
                  name="Finance Amount (USD)"
                  yAxisId="left"
                  xAxisId="xAxis"
                  dot={false}
                  activeDot={{ stroke: "#006a35", strokeWidth: 3, r: 5 }}
                />
              </>
            )}
            <Tooltip content={<AutoTooltip />} />

            <Legend
              align="center"
              wrapperStyle={{
                bottom: 0,
                paddingTop: 10,
              }}
              height={36}
              content={renderLegend}
            />

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
              data={usedAutoIndexPriceData}
              tickFormatter={(tick) => {
                return new Date(tick).getFullYear();
              }}
              dataKey="date"
              xAxisId="xAxis"
              allowDuplicatedCategory={false}
              interval={"preserveStartEnd"}
            />

            <YAxis
              label={{
                value: "Million",
                angle: -90,
                position: "left",
                offset: -20,
              }}
              tickFormatter={(tickItem) => {
                return tickItem / 1000;
              }}
              interval="preserveStartEnd"
              dataKey="value"
              data={retailAutoSalesData}
              domain={[0, 110000]}
              yAxisId="left"
            />
            <YAxis
              dataKey="value"
              padding="px"
              data={fourYearAutoLoanData}
              orientation="right"
              domain={[0, 315]}
              yAxisId="right"
            />
          </LineChart>
        </ResponsiveContainer>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
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
          Housing Data 2000 to Present
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
              variant={showHousingRenter ? "contained" : "outlined"}
              onClick={() => {
                setShowHousingRenter(!showHousingRenter);
                setShowHousingOwner(false);
              }}
            >
              Rent CPI
            </Button>
            <Button
              variant={showHousingOwner ? "contained" : "outlined"}
              onClick={() => {
                setShowHousingOwner(!showHousingOwner);
                setShowHousingRenter(false);
              }}
            >
              Home Sale Price
            </Button>
          </ButtonGroup>
        </Box>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            width={500}
            height={300}
            data={housingStackData}
            margin={{
              top: 5,

              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => {
                return new Date(tick).getFullYear();
              }}
            />
            <YAxis
              domain={[0, 150000]}
              id="left"
              label={{
                value: "Thousands",
                angle: -90,
                position: "left",
                offset: -20,
              }}
              tickFormatter={(tickItem) => {
                return tickItem / 1000;
              }}
            />
            {showHousingOwner && (
              <YAxis
                orientation="right"
                domain={[0, 500000]}
                yAxisId="rightOwner"
                tickFormatter={(tickItem) => {
                  return tickItem / 1000;
                }}
              />
            )}
            {showHousingRenter && (
              <YAxis
                orientation="right"
                domain={[0, 400]}
                yAxisId="rightRenter"
              />
            )}
            <Tooltip shared={true} content={<AutoTooltip />} />
            <Legend
              align="center"
              wrapperStyle={{
                bottom: 0,
                paddingTop: 10,
                paddingLeft: showHousingOwner || showHousingRenter ? 0 : 20,
              }}
              height={36}
              content={renderLegend}
            />
            <Bar
              dataKey="ownerOccupiedHousingUnits"
              fill="#58e1e6"
              barSize={50}
              stackId="a"
            />
            <Bar
              dataKey="renterOccupiedHousingUnits"
              fill="#fad744"
              barSize={50}
              stackId="a"
            />
            <Bar
              dataKey="vacantHousingUnits"
              fill="#292022"
              barSize={50}
              stackId="a"
            />
            {showHousingOwner && (
              <Line
                dataKey="medianHomeSalePrice"
                stroke="#f44336"
                strokeWidth={3}
                yAxisId="rightOwner"
                activeDot={{ stroke: "#de663e", strokeWidth: 3, r: 5 }}
                dot={false}
              />
            )}
            {showHousingRenter && (
              <Line
                dataKey="rentCPI"
                stroke="#f44336"
                strokeWidth={3}
                yAxisId="rightRenter"
                activeDot={{ stroke: "#blue", strokeWidth: 3, r: 5 }}
                dot={false}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default App;
