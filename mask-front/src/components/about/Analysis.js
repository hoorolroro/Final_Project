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
  GoToReview,
  GoToReviewBtn,
} from "../../styles/AboutPageStyle";

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
        <div>
          <h5>죄송합니다 T_T ..</h5>
          <h5>적당량의 리뷰가 존재하지 않아 통계정보를 불러올 수 없습니다.</h5>
          <h5>상세리뷰 확인 혹은 다음에 다시 이용하시길 바랍니다.</h5>
        </div>
      )}
      <GoToReview>
        <GoToReviewBtn>
          <i>여기를 누르면 착용자의 상세리뷰를 보러갈 수 있어요</i>
        </GoToReviewBtn>
      </GoToReview>
    </div>
  );
}

export default Analysis;
