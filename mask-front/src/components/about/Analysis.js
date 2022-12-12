import React, { useEffect, useState } from "react";
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

function Analysis({ maskId }) {
  const [analysisInfo, setAnalysisInfo] = useState({});

  // 리뷰 요청
  useEffect(() => {
    getAnalysis({ maskId, setAnalysisInfo });
  }, []);

  console.log(maskId);
  console.log(analysisInfo);

  return (
    <div>
      <hr></hr>
      <i>Analysis for this Mask</i>
      <hr></hr>
      <AnalysisSection>
        <SizeAnalysis>사이즈통계</SizeAnalysis>
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
