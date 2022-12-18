// import React, { PureComponent } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default class Chart extends PureComponent {
//   render() {
//     return (
//       <LineChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey="pv"
//           stroke="#8884d8"
//           activeDot={{ r: 8 }}
//         />
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//       </LineChart>
//     );
//   }
// }

/******* 라인 **********/

import "chart.js/auto";
import { PieChart } from "react-minimal-pie-chart";
// import { Line } from "react-chartjs-2";

// function LineChart() {
//   const data = {
//     labels: ["2017", "2018", "2019", "2020", "2021(9월까지)"],
//     datasets: [
//       {
//         type: "line",
//         label: "영화관 관객수",
//         borderColor: "rgb(54, 162, 235)",
//         borderWidth: 2,
//         data: [219876227, 216385269, 226678777, 59524093, 59540088],
//         tension: 0.5, // 선을 얼마나 부드럽게 할 것인가
//         yAxisID: "y0", // 축 id
//       },
//       {
//         type: "line",
//         label: "OTT 구독자수",
//         borderColor: "rgb(255, 99, 132)",
//         borderWidth: 2,
//         data: [11692.71, 15794.34, 20156.45, 24996.06, 21988.53],
//         tension: 0.5,
//         yAxisID: "y1",
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       // 축 스타일링
//       y0: {
//         // 축 id별로 스타일링 객체로 넣기
//         id: "y0",
//         type: "linear",
//         display: true,
//         position: "left",
//         grid: {
//           // 축 기준이 되는 grid 스타일링
//           borderColor: "rgb(54, 162, 235)",
//         },
//       },
//       y1: {
//         id: "y1",
//         type: "linear",
//         display: true,
//         position: "right",
//         grid: {
//           borderColor: "rgb(255, 99, 132)",
//         },
//       },
//     },
//     plugins: {
//       datalabels: {
//         display: false,
//       },
//       legend: {
//         // 범례 스타일링
//         labels: {
//           usePointStyle: true, // 라벨 아이콘을 도형과 동일하게 할 것인가?
//         },
//       },
//     },
//   };

//   return (
//     <div className="chart2Container">
//       <Line data={data} options={options} />
//     </div>
//   );
// }

// export default LineChart;

// {large: 28.7%, fitted : 61.2%, small : 10.1%}

/******* 막대 **********/

import { Chart } from "react-chartjs-2";

export function BarChart() {
  const data = {
    labels: ["크다", "알맞다", "작다"],
    datasets: [
      {
        type: "bar",
        label: "reletive_size (%)",
        borderColor: "white",
        borderWidth: 5,
        backgroundColor: "#5CEC7C",
        data: [28.7, 61.2, 10.1],
      },
    ],
  };

  return (
    <div
      className="chart3Container"
      style={{ width: "300px", height: "200px" }}
    >
      <Chart
        type="bar"
        data={data}
        options={{
          indexAxis: "y", // 가로
          scales: {
            x: {
              stacked: true,
              ticks: {
                callback: function (value, index, ticks) {
                  return value + "%";
                }, // end callback
              }, // end ticks
            }, //end xAxis
            y: {
              stacked: true,
            }, //end yAxis
          }, // end scales
        }}
      />
    </div>
  );
}

// export default BarChart;

/* 파이차트연습 */

// import { PieChart } from "react-minimal-pie-chart";

export function PieChartTest() {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        margin: "10px",
        border: "1px solid red",
      }}
    >
      <PieChart
        data={[
          {
            value: 83,
            color: "#5CEC7C",
            name: "name1",
          },
        ]}
        reveal={83} // 퍼센트치수
        lineWidth={18} // 도넛두께
        background="#f3f3f3"
        startAngle={-180} //시작점
        lengthAngle={180} // 끝각도
        rounded
        animate
        label={({ dataEntry }) => dataEntry.value + "%"} // 라벨 % 붙임
        labelStyle={{
          fontSize: "20px",
          fill: "#0ea654",
        }}
        labelPosition={10}
      />
      <BarChart />
      <div
        style={{
          width: "400px",
          height: "200px",
          padding: "50px",
          border: "1px solid red",
        }}
      >
        <PieChart
          data={[
            {
              value: 28,
              color: "#5CEC7C",
              name: "large",
            },
            {
              value: 61,
              color: "#05735F",
              name: "fit",
            },
            {
              value: 10,
              color: "#0ea654",
              name: "small",
            },
          ]}
          reveal={100} // 퍼센트치수
          lineWidth={30} // 도넛두께
          background="#f3f3f3"
          startAngle={0} //시작점
          lengthAngle={360} // 최대각도
          rounded
          animate
          label={({ dataEntry }) =>
            dataEntry.name + ":" + dataEntry.value + "%"
          } // 라벨
          labelStyle={{
            fontSize: "8px",
            fill: "black",
          }}
          labelPosition={110}
        />
      </div>
    </div>
  );
}

// export default Chart;
