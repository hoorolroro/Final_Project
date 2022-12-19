import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAnalysis } from "../../api/analysis/getAnalysis";
import {
  ScoreAnalysis,
  OtherAnalysis,
  AnalysisSection,
  BreatheAnalysis,
  DeliveryAnalysis,
  FitAnalysis,
} from "../../styles/AboutPageStyle";
import ReviewBtn from "./ReviewBtn";
import "chart.js/auto";
import { PieChart } from "react-minimal-pie-chart";
import { Bar, Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";

Chart.register(ChartDataLabels);

function Analysis({ analysisinfo }) {
  console.log("Analysis : ", analysisinfo);

  // 사이즈
  const analysisSize = JSON.parse(analysisinfo.relativeSize);
  // 착용감
  const analysisFit = JSON.parse(analysisinfo.fit);
  // 호흡
  const analysisBreathe = JSON.parse(analysisinfo.breathAbility);
  // 배송
  const analysisDelivery = JSON.parse(analysisinfo.delivery);
  // 점수
  const analysisScore = analysisinfo.score;

  // 사이즈통계
  const sizeData = {
    labels: ["크다", "알맞다", "작다"],
    datasets: [
      {
        data: [analysisSize.large, analysisSize.fitted, analysisSize.small], // 데이터 값
        backgroundColor: ["#05735F", "orange", "#0ea654"], //배경색
      },
    ],
  };

  // 착용감통계
  const fitData = {
    labels: ["만족", "불만족"],
    datasets: [
      {
        data: [analysisFit.pos, analysisFit.neg], // 데이터 값
        backgroundColor: ["orange", "#05735F"], //배경색
      },
    ],
  };

  // 배송통계
  const deliveryData = {
    labels: ["빠르다", "느리다"],
    datasets: [
      {
        data: [analysisDelivery.pos, analysisDelivery.neg], // 데이터 값
        backgroundColor: ["orange", "#05735F"], //배경색
      },
    ],
  };

  // 호흡통계
  const breatheData = {
    labels: ["편하다", "불편하다"],
    datasets: [
      {
        data: [analysisBreathe.pos, analysisBreathe.neg], // 데이터 값
        backgroundColor: ["orange", "#05735F"], //배경색
      },
    ],
  };

  // 옵션 : 통일
  const options = {
    indexAxis: "y", // 세로
    responsive: true,
    plugins: {
      legend: false,
      // title: {
      //   display: true,
      //   // text: "Size Analysis",
      // },
      datalabels: {
        color: "#2D2D2D",
        formatter: (value) => {
          return value + "%"; // 데이터 레이블 퍼센트 붙여주기
        },
        font: {
          weight: "bold",
          size: "12",
        },
        anchor: "end",
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: function (value) {
            return value + "%";
          }, // end callback
        }, // end ticks
      }, //end xAxis
      y: {
        stacked: true,
      }, //end yAxis
    }, // end scales
  };

  return (
    <div>
      {/* 마스크통계 */}
      {/* 마스크 리뷰가 10,000개이상이면 통계출력 => 10,000개 이상이 아나리면 analysisInfo가 undefined  */}
      {analysisinfo ? (
        <div>
          <i>Analysis for this Mask</i>
          <hr></hr>
          <AnalysisSection>
            <ScoreAnalysis>
              <div
                style={{
                  width: "100%",
                  fontSize: "40px",
                  fontWeight: "800",
                  border: "2px solid #0ea654",
                  borderStyle: "dashed",
                  borderRadius: "10px",
                  padding: "40px 5px",
                }}
              >
                <p
                  style={{
                    fontSize: "25px",
                    margin: "5px",
                  }}
                >
                  MASINSA
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    margin: "5px",
                  }}
                >
                  SCORE
                </p>
                <p style={{ margin: "10px" }}>
                  <span style={{ color: "#05735F" }}>{analysisScore}</span>
                  <span style={{ fontSize: "15px" }}> 점 </span>
                </p>
              </div>
            </ScoreAnalysis>
            <div
              style={{
                width: "80%",
                height: "90%",
                // border: "1px solid red",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <div
                style={{ width: "280px", height: "150px", margin: "0 auto" }}
              >
                <Bar data={sizeData} options={options}></Bar>
              </div>
              <div
                style={{ width: "280px", height: "150px", margin: "0 auto" }}
              >
                <Bar data={fitData} options={options}></Bar>
              </div>
              <div
                style={{ width: "280px", height: "150px", margin: "0 auto" }}
              >
                <Bar data={deliveryData} options={options}></Bar>
              </div>
              <div
                style={{ width: "280px", height: "150px", margin: "0 auto" }}
              >
                <Bar data={breatheData} options={options}></Bar>
              </div>
            </div>
          </AnalysisSection>
        </div>
      ) : (
        <>하이</>
      )}
    </div>
  );
}

export default Analysis;
