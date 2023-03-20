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

const App = () => {
  const [showUsedCars, setShowUsedCars] = useState(false);
  const [showNewCars, setShowNewCars] = useState(false);
  const [showConsumerAutoFinance, setShowConsumerAutoFinance] = useState(false);

  const commercialCreditPlans = [
    {
      DATE: "1994-11-01",
      TERMCBCCALLNS: "15.69",
    },

    {
      DATE: "1995-02-01",
      TERMCBCCALLNS: "16.10",
    },

    {
      DATE: "1995-05-01",
      TERMCBCCALLNS: "16.14",
    },

    {
      DATE: "1995-08-01",
      TERMCBCCALLNS: "15.92",
    },

    {
      DATE: "1995-11-01",
      TERMCBCCALLNS: "15.81",
    },

    {
      DATE: "1996-02-01",
      TERMCBCCALLNS: "15.80",
    },

    {
      DATE: "1996-05-01",
      TERMCBCCALLNS: "15.44",
    },

    {
      DATE: "1996-08-01",
      TERMCBCCALLNS: "15.66",
    },

    {
      DATE: "1996-11-01",
      TERMCBCCALLNS: "15.62",
    },

    {
      DATE: "1997-02-01",
      TERMCBCCALLNS: "15.88",
    },

    {
      DATE: "1997-05-01",
      TERMCBCCALLNS: "15.74",
    },

    {
      DATE: "1997-08-01",
      TERMCBCCALLNS: "15.80",
    },

    {
      DATE: "1997-11-01",
      TERMCBCCALLNS: "15.76",
    },

    {
      DATE: "1998-02-01",
      TERMCBCCALLNS: "15.68",
    },

    {
      DATE: "1998-05-01",
      TERMCBCCALLNS: "15.65",
    },

    {
      DATE: "1998-08-01",
      TERMCBCCALLNS: "15.82",
    },

    {
      DATE: "1998-11-01",
      TERMCBCCALLNS: "15.67",
    },

    {
      DATE: "1999-02-01",
      TERMCBCCALLNS: "15.39",
    },

    {
      DATE: "1999-05-01",
      TERMCBCCALLNS: "15.19",
    },

    {
      DATE: "1999-08-01",
      TERMCBCCALLNS: "15.07",
    },

    {
      DATE: "1999-11-01",
      TERMCBCCALLNS: "15.12",
    },

    {
      DATE: "2000-02-01",
      TERMCBCCALLNS: "15.55",
    },

    {
      DATE: "2000-05-01",
      TERMCBCCALLNS: "15.60",
    },

    {
      DATE: "2000-08-01",
      TERMCBCCALLNS: "15.98",
    },

    {
      DATE: "2000-11-01",
      TERMCBCCALLNS: "15.99",
    },

    {
      DATE: "2001-02-01",
      TERMCBCCALLNS: "15.63",
    },

    {
      DATE: "2001-05-01",
      TERMCBCCALLNS: "15.06",
    },

    {
      DATE: "2001-08-01",
      TERMCBCCALLNS: "14.59",
    },

    {
      DATE: "2001-11-01",
      TERMCBCCALLNS: "14.21",
    },

    {
      DATE: "2002-02-01",
      TERMCBCCALLNS: "13.62",
    },

    {
      DATE: "2002-05-01",
      TERMCBCCALLNS: "13.53",
    },

    {
      DATE: "2002-08-01",
      TERMCBCCALLNS: "13.36",
    },

    {
      DATE: "2002-11-01",
      TERMCBCCALLNS: "13.11",
    },

    {
      DATE: "2003-02-01",
      TERMCBCCALLNS: "12.26",
    },

    {
      DATE: "2003-05-01",
      TERMCBCCALLNS: "12.12",
    },

    {
      DATE: "2003-08-01",
      TERMCBCCALLNS: "12.47",
    },

    {
      DATE: "2003-11-01",
      TERMCBCCALLNS: "12.35",
    },

    {
      DATE: "2004-02-01",
      TERMCBCCALLNS: "12.67",
    },

    {
      DATE: "2004-05-01",
      TERMCBCCALLNS: "12.69",
    },

    {
      DATE: "2004-08-01",
      TERMCBCCALLNS: "13.02",
    },

    {
      DATE: "2004-11-01",
      TERMCBCCALLNS: "12.51",
    },

    {
      DATE: "2005-02-01",
      TERMCBCCALLNS: "12.21",
    },

    {
      DATE: "2005-05-01",
      TERMCBCCALLNS: "12.77",
    },

    {
      DATE: "2005-08-01",
      TERMCBCCALLNS: "12.48",
    },

    {
      DATE: "2005-11-01",
      TERMCBCCALLNS: "12.58",
    },

    {
      DATE: "2006-02-01",
      TERMCBCCALLNS: "13.30",
    },

    {
      DATE: "2006-05-01",
      TERMCBCCALLNS: "13.16",
    },

    {
      DATE: "2006-08-01",
      TERMCBCCALLNS: "13.06",
    },

    {
      DATE: "2006-11-01",
      TERMCBCCALLNS: "13.31",
    },

    {
      DATE: "2007-02-01",
      TERMCBCCALLNS: "13.41",
    },

    {
      DATE: "2007-05-01",
      TERMCBCCALLNS: "13.46",
    },

    {
      DATE: "2007-08-01",
      TERMCBCCALLNS: "13.59",
    },

    {
      DATE: "2007-11-01",
      TERMCBCCALLNS: "12.75",
    },

    {
      DATE: "2008-02-01",
      TERMCBCCALLNS: "12.47",
    },

    {
      DATE: "2008-05-01",
      TERMCBCCALLNS: "11.88",
    },

    {
      DATE: "2008-08-01",
      TERMCBCCALLNS: "11.94",
    },

    {
      DATE: "2008-11-01",
      TERMCBCCALLNS: "12.03",
    },

    {
      DATE: "2009-02-01",
      TERMCBCCALLNS: "12.97",
    },

    {
      DATE: "2009-05-01",
      TERMCBCCALLNS: "13.32",
    },

    {
      DATE: "2009-08-01",
      TERMCBCCALLNS: "13.71",
    },

    {
      DATE: "2009-11-01",
      TERMCBCCALLNS: "13.60",
    },

    {
      DATE: "2010-02-01",
      TERMCBCCALLNS: "14.26",
    },

    {
      DATE: "2010-05-01",
      TERMCBCCALLNS: "13.84",
    },

    {
      DATE: "2010-08-01",
      TERMCBCCALLNS: "13.59",
    },

    {
      DATE: "2010-11-01",
      TERMCBCCALLNS: "13.44",
    },

    {
      DATE: "2011-02-01",
      TERMCBCCALLNS: "13.44",
    },

    {
      DATE: "2011-05-01",
      TERMCBCCALLNS: "12.89",
    },

    {
      DATE: "2011-08-01",
      TERMCBCCALLNS: "12.28",
    },

    {
      DATE: "2011-11-01",
      TERMCBCCALLNS: "12.36",
    },

    {
      DATE: "2012-02-01",
      TERMCBCCALLNS: "12.34",
    },

    {
      DATE: "2012-05-01",
      TERMCBCCALLNS: "12.06",
    },

    {
      DATE: "2012-08-01",
      TERMCBCCALLNS: "11.95",
    },

    {
      DATE: "2012-11-01",
      TERMCBCCALLNS: "11.88",
    },

    {
      DATE: "2013-02-01",
      TERMCBCCALLNS: "11.94",
    },

    {
      DATE: "2013-05-01",
      TERMCBCCALLNS: "11.95",
    },

    {
      DATE: "2013-08-01",
      TERMCBCCALLNS: "11.88",
    },

    {
      DATE: "2013-11-01",
      TERMCBCCALLNS: "11.85",
    },

    {
      DATE: "2014-02-01",
      TERMCBCCALLNS: "11.83",
    },

    {
      DATE: "2014-05-01",
      TERMCBCCALLNS: "11.83",
    },

    {
      DATE: "2014-08-01",
      TERMCBCCALLNS: "11.82",
    },

    {
      DATE: "2014-11-01",
      TERMCBCCALLNS: "11.99",
    },

    {
      DATE: "2015-02-01",
      TERMCBCCALLNS: "11.98",
    },

    {
      DATE: "2015-05-01",
      TERMCBCCALLNS: "12.04",
    },

    {
      DATE: "2015-08-01",
      TERMCBCCALLNS: "12.10",
    },

    {
      DATE: "2015-11-01",
      TERMCBCCALLNS: "12.22",
    },

    {
      DATE: "2016-02-01",
      TERMCBCCALLNS: "12.31",
    },

    {
      DATE: "2016-05-01",
      TERMCBCCALLNS: "12.16",
    },

    {
      DATE: "2016-08-01",
      TERMCBCCALLNS: "12.51",
    },

    {
      DATE: "2016-11-01",
      TERMCBCCALLNS: "12.41",
    },

    {
      DATE: "2017-02-01",
      TERMCBCCALLNS: "12.54",
    },

    {
      DATE: "2017-05-01",
      TERMCBCCALLNS: "12.77",
    },

    {
      DATE: "2017-08-01",
      TERMCBCCALLNS: "13.08",
    },

    {
      DATE: "2017-11-01",
      TERMCBCCALLNS: "13.16",
    },

    {
      DATE: "2018-02-01",
      TERMCBCCALLNS: "13.63",
    },

    {
      DATE: "2018-05-01",
      TERMCBCCALLNS: "14.14",
    },

    {
      DATE: "2018-08-01",
      TERMCBCCALLNS: "14.38",
    },

    {
      DATE: "2018-11-01",
      TERMCBCCALLNS: "14.73",
    },

    {
      DATE: "2019-02-01",
      TERMCBCCALLNS: "15.09",
    },

    {
      DATE: "2019-05-01",
      TERMCBCCALLNS: "15.13",
    },

    {
      DATE: "2019-08-01",
      TERMCBCCALLNS: "15.1",
    },

    {
      DATE: "2019-11-01",
      TERMCBCCALLNS: "14.87",
    },

    {
      DATE: "2020-02-01",
      TERMCBCCALLNS: "15.09",
    },

    {
      DATE: "2020-05-01",
      TERMCBCCALLNS: "14.52",
    },

    {
      DATE: "2020-08-01",
      TERMCBCCALLNS: "14.58",
    },

    {
      DATE: "2020-11-01",
      TERMCBCCALLNS: "14.65",
    },

    {
      DATE: "2021-02-01",
      TERMCBCCALLNS: "14.75",
    },

    {
      DATE: "2021-05-01",
      TERMCBCCALLNS: "14.61",
    },

    {
      DATE: "2021-08-01",
      TERMCBCCALLNS: "14.54",
    },

    {
      DATE: "2021-11-01",
      TERMCBCCALLNS: "14.51",
    },

    {
      DATE: "2022-02-01",
      TERMCBCCALLNS: "14.56",
    },

    {
      DATE: "2022-05-01",
      TERMCBCCALLNS: "15.13",
    },

    {
      DATE: "2022-08-01",
      TERMCBCCALLNS: "16.27",
    },

    {
      DATE: "2022-11-01",
      TERMCBCCALLNS: "19.07",
    },
  ];

  // const createQuarterlyData = (...array) => {
  //   const masterArray = [];
  //   array.forEach((element) =>
  //     element.map((dataPoint) => {
  //       const dataPointDate = new Date(dataPoint.DATE);
  //       const dataPointMonth = dataPointDate.getMonth();
  //       const dataPointYear = dataPointDate.getFullYear();
  //       let quarter;
  //       console.log(dataPointYear);
  //       console.log(dataPoint.DATE);
  //       console.log("monht" + dataPointMonth);
  //       if (dataPointMonth < 3) {
  //         quarter = "Q1";
  //       } else if (dataPointMonth < 6) {
  //         quarter = "Q2";
  //       } else if (dataPointMonth < 9) {
  //         quarter = "Q3";
  //       } else {
  //         quarter = "Q4";
  //       }
  //       return (dataPoint.graphDate = `${quarter}-${dataPointYear}`);
  //     })
  //   );
  //   console.log(array);
  //   masterArray.push(array);
  //   console.log(masterArray);
  //   return masterArray;
  // };

  // createQuarterlyData(autoFinanceAmounts, autoLoanRates);

  // const createQuarterlyData = (...array) => {
  //   const masterArray = [];
  //   array.forEach((element) =>
  //     element.map((dataPoint) => {
  //       const dataPointDate = new Date(dataPoint.DATE);
  //       const dataPointMonth = dataPointDate.getMonth();
  //       const dataPointYear = dataPointDate.getFullYear();
  //       let quarter;
  //       console.log(dataPointYear);
  //       console.log(dataPoint.DATE);
  //       console.log("monht" + dataPointMonth);
  //       if (dataPointMonth < 3) {
  //         quarter = "Q1";
  //       } else if (dataPointMonth < 6) {
  //         quarter = "Q2";
  //       } else if (dataPointMonth < 9) {
  //         quarter = "Q3";
  //       } else {
  //         quarter = "Q4";
  //       }

  //       return (dataPoint.graphDate = `${quarter}-${dataPointYear}`,
  //       dataPoint.name = "auto");
  //     })
  //   );
  //   console.log(array);
  //   masterArray.push(array);
  //   console.log(masterArray);
  //   return masterArray;
  // };

  // const createQuarterlyData = (array) => {
  //   array.map((dataPoint) => {
  //     const dataPointDate = new Date(dataPoint.DATE);
  //     const dataPointMonth = dataPointDate.getMonth().toString();
  //     const dataPointYear = dataPointDate.getFullYear();
  //     let quarter = "Q1";

  //     if (dataPointMonth < 2) {
  //       quarter = "Q1";
  //     } else if (dataPointMonth < 5) {
  //       quarter = "Q2";
  //     } else if (dataPointMonth < 8) {
  //       quarter = "Q3";
  //     } else if (dataPointMonth < 11) {
  //       quarter = "Q4";
  //     }
  //     console.log(quarter);
  //     return (dataPoint.graphDate = `${quarter}-${dataPointYear}`);
  //   });

  //   return array;
  // };

  // const autoFinance = createQuarterlyData(autoFinanceAmounts);
  // const autoRates = createQuarterlyData(autoLoanRates);
  // const autoUsed = createQuarterlyData(usedAutoPrice);
  // console.log(autoUsed);

  // const cleanEmptyMonths = (array) => {
  //   array.map((dataPoint) => {
  //     console.log(dataPoint.DATE);
  //     // const dataPointDate = new Date(dataPoint.DATE);
  //     // const dataPointMonth = dataPointDate.getMonth().toString();
  //     // const dataPointYear = dataPointDate.getFullYear();
  //     // let quarter = "Q1"
  //   });
  // };

  // cleanEmptyMonths(autoFinanceAmounts);
  const fourYearAutoLoanData = fourYearAutoLoan.observations;
  const autoLoanFinanceAmountData = autoLoanFinanceAmount.observations;
  const usedAutoSalesData = usedAutoSales.observations;
  const retailAutoSalesData = retailAutoSales.observations;
  const usedAutoIndexPriceData = usedAutoIndexPrice.observations;
  const newAutoIndexPriceData = newAutoIndexPrice.observations;
  const consumerPriceIndexPrice = consumerPriceIndex.observations;

  return (
    <>
      <button
        onClick={() => {
          setShowUsedCars(!showUsedCars);
        }}
      >
        Used Cars
      </button>
      <button
        onClick={() => {
          setShowNewCars(!showNewCars);
        }}
      >
        New Cars
      </button>
      <button
        onClick={() => {
          setShowConsumerAutoFinance(!showConsumerAutoFinance);
        }}
      >
        Consumer Auto Finance
      </button>

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
    </>
  );
};

export default App;
