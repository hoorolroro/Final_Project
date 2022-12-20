// 맨 위: 마신사 로고, 마이페이지 버튼, 네이버 로그인 버튼, 차단지수 카테고리
import React, { useState, useEffect } from "react";
import LoginBtn from "./LoginBtn";
import MyPageBtn from "./MyPageBtn";
import styled from "styled-components";
import {
  HeaderSection,
  TopDiv,
  LogoImg,
  TopBtnDiv,
  BockingIndexNav,
  BlockingBtn,
  TopBlank,
} from "../styles/HeaderStyle";

function Header({ user, setUser, setStatus }) {
  // 로그인 후, 로컬 스토리지에 저장된 userInfo
  // 로그인에 넘겨주는 user랑 같아서 userInfo로 명명
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      <HeaderSection>
        <TopDiv>
          {/* 마신사로고 : home버튼 */}
          <a href="/">
            {/* 로고이미지 : public 폴더에 넣은 후, 경로지정 */}
            <LogoImg
              src={`${process.env.PUBLIC_URL}/MasinsaLogo.png`}
              alt="masinsa"
            ></LogoImg>
          </a>
          <TopBlank></TopBlank>
          <TopBtnDiv>
            {/* 로그인 상태라면 */}
            {userInfo ? (
              // 마이페이지버튼
              <MyPageBtn userInfo={userInfo} />
            ) : (
              // 로그인 아니면 N로그인버튼
              <LoginBtn setUser={setUser} setStatus={setStatus} user={user} />
            )}
          </TopBtnDiv>
        </TopDiv>
        <BockingIndexNav>
          <a href="/MaskList/Masinsa/KF94">
            <BlockingBtn>KF94</BlockingBtn>
          </a>
          <a href="/MaskList/Masinsa/KF80">
            <BlockingBtn>KF80</BlockingBtn>
          </a>
          <a href="/MaskList/Masinsa/OTHER">
            <BlockingBtn>OTHER</BlockingBtn>
          </a>
        </BockingIndexNav>
      </HeaderSection>
    </div>
  );
}

export default Header;
