import React from "react";
import styled from "styled-components";

// 전체화면
export const Wrap = styled.div`
  display: flex;
  flex-direction: column; // 정렬기준
  // border: 2px solid blue;
  overflow-x: scroll;
`;

// Header 제외한 화면의 내용부분 : Main
export const Main = styled.section`
  width: auto;
  height: auto;
  padding: 5px;
  margin: 8px;
  border: 2px solid red;
`;

// 위로가기 버튼 : 고정 fixed
export const GoUpBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  padding: 10px;
  background: #b1f0e1;
  color: white;
  font-weight: 800;
  border: 0px;
  border-radius: 10%;
`;
