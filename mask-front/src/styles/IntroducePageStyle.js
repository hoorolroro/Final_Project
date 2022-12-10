import React from "react";
import styled from "styled-components";

// Header 제외한 화면의 전체 Div
export const PageDiv = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
  margin: 10px;
  // border: 2px solid blue;
`;

// "~~하셨다구요?" 부분 Div
export const TopQuestionDiv = styled.div`
  width: auto;
  height: 125px;
  padding: 1px;
  // border: 1px solid red;
`;

// 글씨 하이라이트
export const HighLightSpan = styled.span`
  color: #ff7d04;
  font-weight: 800;
  font-size: 13px;
  // border: 1px solid red;
`;

// 기본 글씨Span
export const BasicSpan = styled.span`
  font-weight: 800;
  font-size: 12px;
  padding: 5px;
  // border: 1px solid red;
`;

// 그렇다면, MASINSA 저희를 이용해보세요 Div
export const MiddleDiv = styled.div`
  width: auto;
  height: 200px;
  padding-bottom: 10px;
  // border: 1px solid red;
`;

// 로고 이미지 div
export const Logodiv = styled.div`
  width: auto;
  height: 100px;
  padding: 10px;
  margin: 15px;
  // border: 1px solid red;
`;

// 로고 Img
export const IntroLogoImg = styled.img`
  width: 300px;
  height: 100%;
  float: center;
  // border: 1px solid red;
`;

// 중간 선 (hr태그)
export const MiddleHr = styled.hr`
  width: 100%;
  color: #9a9a9a;
  margin-bottom: 30px;
  border: 0px;
  border-top: 2px dashed #9a9a9a;
`;

// 설명 전체 div
export const IntroDiv = styled.div`
  display: flex;
  // overflow: auto;
  width: auto;
  height: 200px;
  flex-wrap: nowrap;
  // border: 1px solid red;
`;

// 세로구분선 : hr 태그 width 적당히 작게 하고 height 주기
export const VerticalHr = styled.hr`
  width: 1px;
  height: 220px;
  border: 0px;
  border-right: 2px solid #9a9a9a;
  margin-left: 5%;
  margin-right: 5%;
`;

// 왼쪽설명(1번째) div
export const LeftIntroDiv = styled.div`
  width: 30%;
  height: 100%;
  float: left;
  margin-left: 5%;
  font-size: 10px;
  // border: 1px solid blue;
`;

// 가운데설명(2번째) div
export const CenterIntroDiv = styled.div`
  width: 30%;
  height: 100%;
  float: left;
  font-size: 10px;
  // margin-left: 5%;
  // border: 1px solid blue;
`;

// 오른쪽설명(3번째) div
export const RightIntroDiv = styled.div`
  width: 30%;
  height: 100%;
  float: right;
  // margin-left: 5%;
  margin-right: 5%;
  font-size: 10px;
  // border: 1px solid blue;
`;

// 설명 글씨 하이라이트
export const IntroHighLightSpan = styled.span`
  color: #ff7d04;
  font-weight: 800;
  font-size: 15px;
  // border: 1px solid red;
`;

// 설명 글씨 Span
export const IntroSpan = styled.span`
  font-weight: 800;
  font-size: 14px;
  padding: 5px;
  // border: 1px solid red;
`;

// 설명글 title div
export const IntroTitleDiv = styled.div`
  width: 100%;
  height: 40%;
  // border: 1px solid blue;
`;

// 설명글내용 div
export const IntroContentDiv = styled.div`
  width: 100%;
  height: 50%;
  font-size: 13px;
  margin-top: 10px;
  // border: 1px solid blue;
`;

// 상품목록이동 div
export const GoListBtnDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: 35px;
  margin-top: 40px;
  padding-top: 15px;
  // border: 1px solid blue;
`;

// 상품목록이동Link a
export const GoListLinkBox = styled.a`
  &:hover {
    color: #05735f;
  }
  &:active {
    color: #5cec7c;
  }
  // border: 1px solid blue;
`;
