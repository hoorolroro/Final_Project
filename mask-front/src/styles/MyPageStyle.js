import React from "react";
import styled from "styled-components";

// 찜목록 section
export const MyPageBox = styled.div`
  height: 350px;
  border-radius: 15px;
  border: 2px solid #05735f;
  border-style: dashed;
  position: relative;
  box-shadow: 0px 1px 3px #999;
`;

// 찜목록이름 (MyWishList)
export const MyPageArticle = styled.div`
  position: absolute;
  width: 96.5%;
  height: 13%;
  border-radius: 15px 15px 0px 0px;
  // border: 1px solid red;
  background: #05735f;
  top: -1%;
  left: -0.5%;
  text-align: left;
  color: white;
  padding: 20px 20px 0px;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0px 1px 3px #999;
`;

// 찜목록 담는 곳
export const MyWishMasks = styled.div`
  position: absolute;
  // border: "1px solid red",
  top: 23%;
  left: 3%;
  right: 3%;
  height: 70%;
  width: 94%;
  overflow-x: scroll;
`;
