import React from "react";
import styled from "styled-components";

// 마스크상세페이지 Wrapper
export const MaskAboutWrapper = styled.section`
  width: auto;
  height: auto;
  padding: 5px;
  // border: 2px solid blue;
`;

/* MakInfo 부분 */

//  마스크 정보 Section
export const MaskInfoSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 350px;
  padding: 5px;
  margin: 5px;
  // border: 2px solid red;
`;

// 마스크 썸네일 img
export const MaskThumnailImg = styled.img`
  width: 35%;
  height: 95%;
  padding: 5px;
  margin-right: 25px;
  border: 1px solid #d9d9d9;
`;

// 마스크 info content
export const MaskInfoContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 80%;
  padding: 10px;
  margin-left: 25px;
  overflow: hidden;
  // border: 2px solid blue;
`;

// 마스크 (타이틀 + wish) Section
export const MaskInfoTopSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  height: 20%;
  // padding: 8px;
  margin-bottom: 5px;
  overflow: hidden;
  // border: 2px solid blue;
`;

// 마스크 Title
export const MaskTitle = styled.div`
  width: 80%;
  // padding: 5px;
  text-align: left;
  font-size: 18px;
  font-weight: 800;
  // border: 2px solid blue;
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
  // border: 2px solid blue;
`;

// 마스크 옵션
export const MaskInfoOption = styled.div`
  width: auto;
  height: 15%;
  text-align: left;
  padding: 5px;
  margin-bottom: 20px;
  overflow: hidden;
  // border: 2px solid blue;
`;

// 마스크 구매링크 Section
export const MaskBuyLink = styled.div`
  width: 80%;
  height: 13%;
  padding: 10px 5px 0px;
  overflow: hidden;
  background: #2d2d2d;
  border-radius: 15px;
  border: 0px;
`;

// 구매버튼LinkBpx
export const BuyLinkBox = styled.a`
  outline: none;
  text-decoration: none;
  font-size: 14px;
  padding: 1px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #5cec7c;
  }
  &:active {
    color: #5cec7c;
    text-decoration: underline;
  }
`;

/* 통계 부분 */

// 통계 Section
export const AnalysisSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 300px;
  // padding: 5px;
  margin-bottom: 15px;
  // border: 2px solid red;
`;

// 점수 통계 div
export const ScoreAnalysis = styled.div`
  width: 20%;
  height: 80%;
  // border: 1px solid blue;
  padding-top: 15px;
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

// 리뷰보러가기 버튼 부분
export const GoToReview = styled.div`
  width: auto;
  height: 30px;
  padding: 2px 0px 5px;
  margin-bottom: 15px;
  border: 1px solid #9a9a9a;
  border-style: none none double none;
`;

// 리뷰보러가기 버튼
export const GoToReviewBtn = styled.button`
  width: auto;
  height: 30px;
  background: none;
  border: 0px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #05735f;
  }
  &:active {
    color: #12de1a;
  }
`;

/* 상세 이미지 부분 */

// 상세 이미지 Section
export const MaskDetailSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 5px;
  margin: 5px;
  // border: 2px solid red;
`;

/* 리뷰 부분 */

// 리뷰 Section
export const ReviewSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 5px;
  margin: 5px;
  // border: 2px solid red;
`;

// 리뷰 총평 Section
export const ReviewTotal = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  margin: 10px;
  border: 1px solid green;
`;

// 리뷰 총평 세부사항
export const Totals = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  // border: 2px solid green;
`;

// 리뷰버튼 Section
export const ReviewBtnSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  // margin: 5px;
  // border: 2px solid blue;
`;

// 네이버리뷰버튼 ( Naver)
export const NaverReviewBtn = styled.button`
  width: 250px;
  height: 90%;
  margin: 5px;
  overflow: hidden;
  background: none;
  border: 2px solid grey;
  border-style: none none double;
  cursor: pointer;
  &:hover {
    color: #12de1a;
  }
  &:active {
    color: #12de1a;
    text-decoration: underline;
  }
`;

// 네이버리뷰 선택o
export const NaverReviewBtn_active = styled.button`
  width: 250px;
  height: 90%;
  margin: 5px;
  overflow: hidden;
  background: none;
  color: #12de1a;
  border: 2px solid #12de1a;
  border-style: none none double;
  cursor: pointer;
  &:hover {
    color: #12de1a;
    text-decoration: underline;
  }
`;

// 마신사리뷰버튼 (선택x)
export const MasinsaReviewBtn = styled.button`
  width: 250px;
  height: 90%;
  margin: 5px;
  overflow: hidden;
  background: none;
  border: 2px solid grey;
  border-style: none none double;
  cursor: pointer;
  &:hover {
    color: #0ea654;
  }
  &:active {
    color: #0ea654;
    text-decoration: underline;
  }
`;

// 마신사리뷰 선택o
export const MasinsaReviewBtn_active = styled.button`
  width: 250px;
  height: 90%;
  margin: 5px;
  overflow: hidden;
  background: none;
  border: 2px solid #0ea654;
  color: #0ea654;
  border-style: none none double;
  cursor: pointer;
  &:hover {
    color: #0ea654;
    text-decoration: underline;
  }
`;

// 리뷰내용 Section
export const ReviewContent = styled.section`
  width: 95%;
  height: auto;
  padding: 5px;
  margin: 5px;
  // border: 2px solid blue;
`;

/* Reviews */

// 각각의 리뷰칸 Section
export const EachReviewSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-item: center;
  width: auto;
  height: auto;
  margin-bottom: 10px;
  padding: 1px;
  border: 1px solid #9a9a9a;
  border-style: none none double;
`;

// 리뷰Top : score
export const ReviewTop = styled.div`
  width: auto;
  height: 20%;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  margin: 5px;
  padding: 1px;
  // border: 1px solid red;
`;

// 리뷰Center : id + option
export const ReviewCenter = styled.div`
  width: auto;
  height: 20%;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  margin: 5px;
  // border: 1px solid red;
`;

// 리뷰Bottom : 내용
export const ReviewBottom = styled.div`
  width: auto;
  height: 50%;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  margin: 5px;
  // border: 1px solid red;
`;
