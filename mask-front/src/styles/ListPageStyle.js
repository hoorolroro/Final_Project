import React from "react";
import styled from "styled-components";

/* 리스트 페이지 기본 Section 나눈거 */

// 필터들이 있는 Section
export const FilterSection = styled.section`
  width: auto;
  height: 235px;
  padding: 5px;
  margin: 5px;
  // border: 2px solid red;
`;

// 마스크리스트 Section
export const FilterMaskListSection = styled.section`
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

// 정렬기준2 ( 리스트페이지 )
export const SortSection2 = styled.section`
  width: auto;
  height: 20px;
  padding: 5px;
  margin: 5px;
  // border: 2px solid red;
`;

/* Filter 부분 스타일 */

// 마스크 형태 리스트 Section ( 새부리 / 입체 / 덴탈)
export const ShapeListsSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 120px;
  padding: 10px;
  // border: 2px solid red;
`;

// 마스크 사이즈 리스트 Section ( 전체 / 대형 / 중형 / 소형 / 기타)
export const SizeListsSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 45px;
  // border: 2px solid red;
`;

// 마스크 형태 Btn
export const ShapeBtn = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 30%;
  font-size: 15px;
  font-weight: 800;
  background: none;
  border: 0px;
  cursor: pointer;
  &:hover {
    color: #05735f;
  }
  &:active {
    color: #5cec7c;
  }
`;

// 마스크형태 Img (ShapeBtn버튼)
export const MaskShapeImg = styled.img`
  width: 50px;
  height: 50px;
  background: #05735f;
  padding: 2px;
  border: 0px;
  border-radius: 50px;
`;

// 마스크 형태 내용 (ShapeBtn버튼)
export const MaskShapeName = styled.div`
  margin-left: 10px;
  // border: 1px solid red;
`;

// 마스크 사이즈 Btn
export const SizeBtn = styled.button`
  width: 15%;
  padding: 10px;
  background: none;
  border: 0px;
  cursor: pointer;
  &:hover {
    color: #05735f;
  }
  &:active {
    color: #5cec7c;
  }
`;
