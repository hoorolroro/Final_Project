import React from "react";
import styled from "styled-components";

/* 리스트 페이지 기본 Section 나눈거 */

// 필터들이 있는 Section
export const FilterSection = styled.section`
  width: auto;
  height: 250px;
  padding: 5px;
  margin: 5px;
  border: 2px solid red;
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
  justify-content: center;
  width: auto;
  height: 130px;
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
  margin-top: 5px;
  // border: 2px solid red;
`;

// 마스크 형태 Li
export const ShapeLi = styled.li`
  width: 30%;
  float: left;
  padding: 10px;
  // border: 1px solid blue;
`;

// 마스크 사이즈 Li
export const SizeLi = styled.li`
  width: 15%;
  float: left;
  padding: 10px;
  // border: 1px solid blue;
`;
