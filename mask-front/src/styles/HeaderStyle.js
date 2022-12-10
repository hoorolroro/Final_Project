import React from "react";
import styled from "styled-components";

// 로고 + 로그인, 마이페이지 + 차단지수가 담긴 header div
export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column; // 정렬기준
  flex: nowrap;
  width: auto;
  height: 130px;
  // margin: 5px;
  background: #05735f;
  // border: 1px solid red;
`;

// header에서 차단지수를 제외한 윗부분 div
export const TopDiv = styled.div`
  display: flex;
  flex: wrap;
  // display: grid;
  // grid-template-columns: 2fr 6fr 1fr;
  width: 100%;
  height: 80px;
  padding-top: 2px;
  padding-bottom: 3px;
  // background: #05735f;
  // border: 1px solid red;
  overflow: hidden;
`;

export const TopBlank = styled.div`
  width: 1200px;
  // border: 1px solid red;
`;

// 로고 Img 스타일
export const LogoImg = styled.img`
  width: 230px;
  height: 100%;
  float: left;
  padding-left: 5px;
  // border: 1px solid skyblue;
`;

// 마이페이지, 네이버버튼을 담은 div
export const TopBtnDiv = styled.div`
  float: right;
  width: 160px;
  height: 100%;
  padding-top: 5px;
  // border: 1px solid skyblue;
`;

// 마이페이지Btn
export const MyPageBtnStyle = styled.button`
  width: 130px;
  height: 30px;
  font-size: 13px;
  border: 0px solid #fff;
  border-radius: 3px;
  margin: 5px;
  background: #091f22;
  color: #fff;
`;

// 네이버Btn
export const LoginBtnStyle = styled.button`
  width: 130px;
  height: 30px;
  font-size: 13px;
  border: 0px solid #fff;
  border-radius: 3px;
  margin: 5px;
  background: #12de1a;
  color: #fff;
`;

// 차단지수를 담은 nav
export const BockingIndexNav = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // grid-gap: 1px;
  width: auto;
  height: 40px;
  padding-top: 5px;
  // border: 2px solid yellow;
`;

// 차단지수Btn
export const BlockingBtn = styled.button`
  width: 100%;
  height: 40.5px;
  font-size: 17px;
  margin-top: 1px;
  border: 1px solid #091f22;
  background: #2d2d2d;
  color: #fff;
`;
