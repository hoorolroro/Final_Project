import React from "react";
import styled from "styled-components";

/* 마스크리스트 부분 */

// 마스크리스트 보여주는 div * 3 = 6개 ( 한칸당 2개씩)
export const MaskListDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 10px;
  border: 2px solid red;
`;

// 리스트의 각 마스크 요약정보 칸
export const MaskSummaryBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 400px;
  height: 280px;
  padding: 10px;
  margin: 0 5px 10px 5px;
  border: 1px solid red;
  // border: 1px solid #d9d9d9;
  // border-style: none none double;
`;

// 리스트에서 각 마스크 이미지
export const MaskSummaryImg = styled.img`
  width: 40%;
  height: 80%;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #d9d9d9;
`;

// 리스트에서 이미지를 제외한 마스크정보 부분 (이름, 가격, 옵션, 평점, 찜버튼)
export const MaskSummaryContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 80%;
  padding: 5px;
  // border: 2px solid blue;
`;

// 마스크 타이틀 + wishBtn 부분
export const MaskSummaryTopDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  width: auto;
  margin-bottom: 15px;
  padding-left: 10px;
  // border: 2px solid red;
`;

// 마스크 Title 링크박스 (링크이동)
export const MaskSummaryTitleLinkBox = styled.a`
  width: 70%;
  font-weight: 700;
  text-align: left;
  font-size: 16px;
  margin-left: 1px;
  overflow: hidden;
  // border: 2px solid blue;
`;

// 마스크 가격부분 링크박스 (링크이동)
export const MaskSummaryPriceLinkBox = styled.a`
  width: auto;
  padding-left: 15px;
  margin-bottom: 10px;
  font-weight: 700;
  text-align: left;
  font-size: 15px;
  color: #ff7d04;
  overflow: hidden;
  // border: 2px solid red;
`;

// 마스크 옵션부분
export const MaskSummaryOption = styled.div`
  width: auto;
  padding-left: 15px;
  margin-bottom: 15px;
  text-align: left;
  font-size: 14px;
  margin-top: 5px;
  overflow: hidden;
  // border: 2px solid red;
`;

// 마스크 평점부분
export const MaskScore = styled.div`
  width: auto;
  padding-left: 15px;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  // border: 2px solid red;
`;
