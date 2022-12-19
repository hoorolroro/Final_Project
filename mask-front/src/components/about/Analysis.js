import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAnalysis } from "../../api/analysis/getAnalysis";
import {
  SizeAnalysis,
  OtherAnalysis,
  AnalysisSection,
  BreatheAnalysis,
  DeliveryAnalysis,
  FitAnalysis,
} from "../../styles/AboutPageStyle";
import ReviewBtn from "./ReviewBtn";
import "chart.js/auto";
import { PieChart } from "react-minimal-pie-chart";
import { Line } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";

function Analysis({ analysisinfo }) {
  console.log("Analysis : ", analysisinfo);

  return (
    <div>
      <hr></hr>
      <i>Analysis for this Mask</i>
      <hr></hr>
      {/* 마스크통계 */}
      {/* 마스크 리뷰가 10,000개이상이면 통계출력 => 10,000개 이상이 아나리면 analysisInfo가 undefined  */}
      {analysisinfo ? (
        <div>
          <AnalysisSection>
            <SizeAnalysis>
              <PieChart
                data={[
                  {
                    value: 85,
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
            </SizeAnalysis>
            <OtherAnalysis>
              <DeliveryAnalysis>배송</DeliveryAnalysis>
              <BreatheAnalysis>호흡</BreatheAnalysis>
              <FitAnalysis>착용감</FitAnalysis>
            </OtherAnalysis>
          </AnalysisSection>
        </div>
      ) : (
        <div
          style={{
            fontSize: "12px",
            fontWeight: "700",
            margin: "10px",
            padding: "5px",
          }}
        >
          <p>죄송합니다 T_T ..</p>
          <p>적당량의 리뷰가 존재하지 않아 통계정보를 불러올 수 없습니다.</p>
          <p>상세리뷰 확인 혹은 다음에 다시 이용하시길 바랍니다.</p>
          <h6 style={{ color: "#0ea654" }}>
            * 더욱 발전한 MASINSA가 될 수 있도록 노력하겠습니다. *
          </h6>
          <p>이용해주셔서 감사합니다.</p>
        </div>
      )}
      <ReviewBtn />
    </div>
  );
}

export default Analysis;
