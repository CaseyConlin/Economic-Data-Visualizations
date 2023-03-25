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
} from "../Data/AutoData";
import { ChartTooltip } from "./Tooltip";
import { renderLegend } from "./Legend";
import { Heading } from "../UI/Heading";
import { ChartButtonGroup } from "../UI/ChartButtonGroup";
export const AutoChart = (props) => {
  const fourYearAutoLoanData = fourYearAutoLoan.observations;
  const autoLoanFinanceAmountData = autoLoanFinanceAmount.observations;
  const usedAutoSalesData = usedAutoSales.observations;
  const retailAutoSalesData = retailAutoSales.observations;
  const usedAutoIndexPriceData = usedAutoIndexPrice.observations;
  const newAutoIndexPriceData = newAutoIndexPrice.observations;
  const consumerPriceIndexPrice = consumerPriceIndex.observations;

  return (
    <>
      <Heading content="Consumer Auto Data 1992 to Present" />
      <ChartButtonGroup
        buttons={[
          {
            content: "Used Cars",
            click: props.showUsedCarsClickHandler,
            clicked: props.showUsedCars,
          },
          {
            content: "New Cars",
            click: props.showNewCarsClickHandler,
            clicked: props.showNewCars,
          },
          {
            content: "Cosumer Auto Finance",
            click: props.showConsumerAutoFinanceClickHandler,
            clicked: props.showConsumerAutoFinance,
          },
        ]}
      />

      <ResponsiveContainer width="100%" height={400}>
        <LineChart>
          <Line
            type="monotone"
            data={consumerPriceIndexPrice}
            dataKey={"value"}
            stroke="#2196f3"
            strokeWidth={2}
            dot={false}
            iconType="line"
            connectNulls
            name="Consumer Price Index"
            yAxisId="right"
            xAxisId="xAxis"
            activeDot={{ stroke: "black", strokeWidth: 1, r: 5 }}
          />
          {props.showUsedCars && (
            <>
              <Line
                type="monotone"
                data={usedAutoIndexPriceData}
                dataKey={"value"}
                stroke="#e91e63"
                strokeWidth={2}
                dot={false}
                connectNulls
                name="Used Auto CPI"
                yAxisId="right"
                xAxisId="xAxis"
                activeDot={{ stroke: "#e91e63", strokeWidth: 1, r: 5 }}
              />
              <Line
                type="monotone"
                data={usedAutoSalesData}
                dataKey={"value"}
                stroke="#9c27b0 "
                strokeWidth={2}
                dot={false}
                name="Used Auto Sales($M)"
                yAxisId="left"
                xAxisId="xAxis"
                activeDot={{ stroke: "#9c27b0 ", strokeWidth: 1, r: 5 }}
              />
            </>
          )}

          {props.showNewCars && (
            <>
              <Line
                type="monotone"
                data={newAutoIndexPriceData}
                dataKey={"value"}
                stroke="#8bc34a"
                dot={false}
                strokeWidth={2}
                connectNulls
                name="New Auto CPI"
                yAxisId="right"
                xAxisId="xAxis"
                activeDot={{ stroke: "#8bc34a", strokeWidth: 1, r: 5 }}
              />
              <Line
                type="monotone"
                data={retailAutoSalesData}
                dataKey={"value"}
                stroke="#4caf50"
                strokeWidth={2}
                dot={false}
                name="New Auto Sales($M)"
                yAxisId="left"
                xAxisId="xAxis"
                activeDot={{ stroke: "#4caf50", strokeWidth: 1, r: 5 }}
              />
            </>
          )}
          {props.showConsumerAutoFinance && (
            <>
              <Line
                type="monotone"
                data={fourYearAutoLoanData}
                dataKey={"value"}
                stroke="#ff6f00"
                strokeWidth={2}
                dot={false}
                connectNulls
                name="Auto Loan Rate(%)"
                yAxisId="right"
                xAxisId="xAxis"
                activeDot={{ stroke: "#ff6f00", strokeWidth: 1, r: 5 }}
              />
              <Line
                type="monotone"
                data={autoLoanFinanceAmountData}
                dataKey={"value"}
                connectNulls
                stroke="#ff9800"
                strokeWidth={2}
                name="Finance Amount(USD)"
                yAxisId="left"
                xAxisId="xAxis"
                dot={false}
                activeDot={{ stroke: "#ff9800", strokeWidth: 1, r: 5 }}
              />
            </>
          )}
          <Tooltip content={<ChartTooltip />} />

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
    </>
  );
};
