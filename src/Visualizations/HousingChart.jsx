import {
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

import {
  totalHousingUnits,
  vacantHousingUnits,
  ownerOccupiedHousingUnits,
  renterOccupiedHousingUnits,
  medianHomeSalePrice,
  rentCPI,
} from "../Data/HousingData";
import { ChartTooltip } from "./Tooltip";
import { renderLegend } from "./Legend";
import { Heading } from "../UI/Heading";
import { ChartButtonGroup } from "../UI/ChartButtonGroup";

export const HousingChart = (props) => {
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

  const housingData = compileData(
    totalHousingUnits,
    vacantHousingUnits,
    renterOccupiedHousingUnits,
    ownerOccupiedHousingUnits,
    medianHomeSalePrice,
    rentCPI
  );

  return (
    <>
      <Heading content={"Housing Data 2000 to Present"} />
      <ChartButtonGroup
        buttons={[
          {
            content: "Rent CPI",
            click: props.renterClickHandler,
            clicked: props.showHousingRenter,
          },
          {
            content: "Home Sale Price",
            click: props.ownerClickHandler,
            clicked: props.showHousingOwner,
          },
        ]}
      />

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={300}
          data={housingData}
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
          {props.showHousingOwner && (
            <YAxis
              orientation="right"
              domain={[0, 500000]}
              yAxisId="rightOwner"
              tickFormatter={(tickItem) => {
                return tickItem / 1000;
              }}
            />
          )}
          {props.showHousingRenter && (
            <YAxis
              orientation="right"
              domain={[0, 400]}
              yAxisId="rightRenter"
            />
          )}
          <Tooltip shared={true} content={<ChartTooltip />} />
          <Legend
            align="center"
            wrapperStyle={{
              bottom: 0,
              paddingTop: 10,
              paddingLeft:
                props.showHousingOwner || props.showHousingRenter ? 0 : 20,
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
          {props.showHousingOwner && (
            <Line
              dataKey="medianHomeSalePrice"
              stroke="#f44336"
              strokeWidth={3}
              yAxisId="rightOwner"
              activeDot={{ stroke: "#de663e", strokeWidth: 1, r: 5 }}
              dot={false}
            />
          )}
          {props.showHousingRenter && (
            <Line
              dataKey="rentCPI"
              stroke="#f44336"
              strokeWidth={3}
              yAxisId="rightRenter"
              activeDot={{ stroke: "#blue", strokeWidth: 1, r: 5 }}
              dot={false}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};
