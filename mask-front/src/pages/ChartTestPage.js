import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Chart() {
  const data = {
    labels: ["hi", "hello", "bye"], // 라벨이름
    datasets: [
      {
        label: "# 인사",
        data: [2, 10, 5], // 데이터 값
        backgroundColor: ["blue", "green", "pink"], //배경색
        borderColor: "black",
        borderWidth: "2",
      },
      {
        label: "두번째",
        data: [2, 10, 5], // 데이터 값
        backgroundColor: ["red"], //배경색
        borderColor: "black",
        borderWidth: "2",
      },
    ],
  };

  // 막대차트 옵션
  const options = {
    indexAxis: "y", // 세로
    responsive: true,
    elements: {
      bar: {
        borderWidth: 5,
      },
    },
    plugins: {
      // legend: false,
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "막대연습",
      },
    },
  };

  const options2 = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          fontsize: 20,
        },
      },
    },
  };

  return (
    <div style={{ width: "500px", heoght: "400px", margin: "0 auto" }}>
      <h1>도넛</h1>
      <Doughnut data={data}></Doughnut>
      <h1>막대</h1>
      <Bar data={data} options={options}></Bar>
      <h1> 막대2</h1>
      <Bar data={data} options={options2}></Bar>
    </div>
  );
}

export default Chart;
