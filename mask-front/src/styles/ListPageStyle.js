import React from "react";
import styled from "styled-components";

// 마스크 형태 리스트 Section ( 새부리 / 입체 / 덴탈)
export const ShapeListsSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 130px;
  padding: 10px;
  border: 2px solid red;
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
  border: 2px solid red;
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
