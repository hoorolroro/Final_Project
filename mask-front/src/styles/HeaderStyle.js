import React from "react";
import styled from "styled-components";

// 로고 + 로그인, 마이페이지 + 차단지수가 담긴 header div
export const HeaderDiv = styled.div`
  width: 100%;
  height: 130px;
  //   border: 1px solid red;
`;

// header에서 차단지수를 제외한 윗부분 div
export const TopDiv = styled.div`
  width: 100%;
  height: 75px;
  padding-top: 2px;
  padding-bottom: 3px;
  // border: 1px solid green;
  background: #05735f;
`;

// 로고 Img 스타일
export const LogoImg = styled.img`
  width: 200px;
  height: 100%;
  float: left;
  //   border: 1px solid skyblue;
  padding-left: 10px;
`;

// 마이페이지, 네이버버튼을 담은 div
export const TopBtnDiv = styled.div`
  float: right;
  width: 160px;
  height: 100%;
  //   border: 1px solid skyblue;
`;

// 마이페이지Btn
export const MyPageBtnStyle = styled.button`
  width: 80%;
  height: 25px;
  font-size: 13px;
  border: 0px solid #fff;
  border-radius: 3px;
  margin: 5px;
  background: #091f22;
  color: #fff;
`;

// 네이버Btn
export const LoginBtnStyle = styled.button`
  width: 80%;
  height: 25px;
  font-size: 13px;
  border: 0px solid #fff;
  border-radius: 3px;
  margin: 5px;
  background: #12de1a;
  color: #fff;
`;

// 차단지수를 담은 div
export const BockingIndexDiv = styled.div`
  width: 100%;
  height: 45px;
  //   border: 1px solid blue;
  //   padding-top: 1px;
`;

// 차단지수Btn
export const BlockingBtn = styled.button`
  width: 33.33%;
  height: 45px;
  font-size: 17px;
  border: 0px solid;
  background: #2d2d2d;
  color: #fff;
`;
