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
  GoToReview,
  GoToReviewBtn,
} from "../../styles/AboutPageStyle";
import MaskInfo from "./MaskInfo";
import ReviewBtn from "./ReviewBtn";
import Reviews from "./Reviews";

// function Analysis({ maskId, reviewsId, reviewsRef }) {
function Analysis({ maskId }) {
  const [analysisInfo, setAnalysisInfo] = useState([]);
  // 리뷰 요청
  useEffect(() => {
    getAnalysis({ maskId, setAnalysisInfo });
  }, []);

  // console.log(maskId);
  // console.log("analysisInfo", analysisInfo);

  return (
    <div>
      <hr></hr>
      <i>Analysis for this Mask</i>
      <hr></hr>
      {/* 마스크통계 */}
      {/* 마스크 리뷰가 10,000개이상이면 통계출력 => 10,000개 이상이 아나리면 analysisInfo가 undefined  */}
      {analysisInfo != undefined ? (
        <div>
          <AnalysisSection>
            <SizeAnalysis>사이즈통계</SizeAnalysis>
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
      <ReviewBtn
      // reviewsId={reviewsId}
      // reviewsRef={reviewsRef}
      />
    </div>
  );
}

export default Analysis;
