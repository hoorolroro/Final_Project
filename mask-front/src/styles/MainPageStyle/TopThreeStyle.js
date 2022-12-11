import React from "react";
import styled from "styled-components";

// TOP3 부분
export const Top3Section = styled.section`
  width: auto;
  height: 340px;
  padding: 5px;
  margin: 5px;
  // border: 2px solid blue;
`;

// MASINSA'S BEST 부분 section
export const Top3ArticleSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: auto;
  height: 30px;
  padding: 2px;
  overflow: hidden;
  // border: 2px solid green;
`;

// 공백
export const Top3BlankSection = styled.div`
  width: 30%;
  // border: 2px solid blue;
`;

// MASINSA'S BEST
export const Top3Article = styled.div`
  width: 35%;
  font-weight: 800;
  font-size: 20px;
  // border: 2px solid blue;
`;

// 마신사 기준이동 LinkBox
export const IntroLinkBox = styled.a`
  width: 30%;
  float: right;
  font-size: 13px;
  text-align: right;
  outline: none;
  text-decoration: none;
  padding: 12px 2px 0 0;
  // border: 2px solid blue;
  &:hover {
    color: #05735f;
    border-bottom: 1px solid;
  }
  &:active {
    color: #5cec7c;
  }
`;

// TOP3마스크 띄워주는 Section\Introduce\Masinsa
export const Top3MaskSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: auto;
  height: 300px;
  // border: 2px solid red;
  // padding: 2px;
`;

// 1등 마스크 (오른쪽)
export const FirstMaskLinkBox = styled.a`
  width: 30%;
  float: left;
  border-radius: 15px;
  margin: 10px;
  border: 2px solid blue;
`;

// 2등 마스크(중간)
export const SecondMaskLinkBox = styled.a`
  width: 30%;
  margin: 10px;
  border-radius: 15px;
  border: 2px solid blue;
`;

// 3등 마스크(왼쪽)
export const ThirdMaskLinkBox = styled.a`
  width: 30%;
  float: right;
  margin: 10px;
  border-radius: 15px;
  border: 2px solid blue;
`;
