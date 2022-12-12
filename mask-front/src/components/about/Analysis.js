import React from "react";
import styled from "styled-components";
import {
  SizeAnalysis,
  OtherAnalysis,
  AnalysisSection,
  BreatheAnalysis,
  DeliveryAnalysis,
  FitAnalysis,
} from "../../styles/AboutPageStyle";

function Analysis() {
  return (
    <div>
      <hr></hr>
      <i>Analysis for this Mask</i>
      <hr></hr>
      <AnalysisSection>
        <SizeAnalysis>사이트통계</SizeAnalysis>
        <OtherAnalysis>
          <DeliveryAnalysis>배송</DeliveryAnalysis>
          <BreatheAnalysis>호흡</BreatheAnalysis>
          <FitAnalysis>착용감</FitAnalysis>
        </OtherAnalysis>
      </AnalysisSection>
    </div>
  );
}

export default Analysis;
