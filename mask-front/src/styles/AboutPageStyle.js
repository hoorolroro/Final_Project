import React from "react";
import styled from "styled-components";

// 마스크상세페이지 Wrapper
export const MaskAboutWrapper = styled.section`
  width: auto;
  height: auto;
  padding: 5px;
  border: 2px solid blue;
`;

/* MakInfo 부분 */

//  마스크 정보 Section
export const MaskInfoSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 350px;
  padding: 5px;
  margin: 5px;
  border: 2px solid red;
`;

// 마스크 썸네일 img
export const MaskThumnailImg = styled.img`
  width: 40%;
  height: 90%;
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #d9d9d9;
`;

// 마스크 info content
export const MaskInfoContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  height: 80%;
  padding: 10px;
  margin-left: 10px;
  overflow: hidden;
  border: 2px solid blue;
`;

// 마스크 (타이틀 + wish) Section
export const MaskInfoTopSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  height: 25%;
  padding: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  border: 2px solid blue;
`;

// 마스크 Title
export const MaskTitle = styled.div`
  width: 80%;
  // padding: 5px;
  text-align: left;
  font-size: 18px;
  font-weight: 800;
  border: 2px solid blue;
`;

// 마스크 가격
export const MaskInfoPrice = styled.div`
  width: auto;
  height: 10%;
  padding: 5px;
  margin-bottom: 5px;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  color: #ff7d04;
  overflow: hidden;
  border: 2px solid blue;
`;

// 마스크 옵션
export const MaskInfoOption = styled.div`
  width: auto;
  height: 15%;
  text-align: left;
  padding: 5px;
  margin-bottom: 20px;
  overflow: hidden;
  border: 2px solid blue;
`;

// 마스크 구매링크
export const MaskBuyLink = styled.div`
  width: auto;
  height: 15%;
  padding: 5px;
  overflow: hidden;
  background: #2d2d2d;
  border-radius: 15px;
  border: 0px;
`;

/* 통계 부분 */

// 통계 Section
export const AnalysisSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 260px;
  padding: 5px;
  margin: 5px;
  border: 2px solid red;
`;

// 사이즈 통계 div
export const SizeAnalysis = styled.div`
  width: 35%;
  height: 90%;
  padding: 5px;
  border: 1px solid blue;
`;

// 나머지 통계부분 div ( 배송, 호흡, 착용감 )
export const OtherAnalysis = styled.div`
  width: 55%;
  height: 90%;
  padding: 5px;
  border: 1px solid blue;
`;

// 배송통계
export const DeliveryAnalysis = styled.div`
  width: auto;
  height: 25%;
  padding: 5px;
  margin: 5px;
  border: 1px solid blue;
`;

// 호흡통계
export const BreatheAnalysis = styled.div`
  width: auto;
  height: 25%;
  padding: 5px;
  margin: 5px;
  border: 1px solid blue;
`;

// 착용감통계
export const FitAnalysis = styled.div`
  width: auto;
  height: 25%;
  padding: 5px;
  margin: 5px;
  border: 1px solid blue;
`;
