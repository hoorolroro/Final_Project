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
  LogoutBtn,
} from "../styles/HeaderStyle";

function Header({ user, setUser, setStatus }) {
  // 로그인 후, 로컬 스토리지에 저장된 userInfo
  // 로그인에 넘겨주는 user랑 같아서 userInfo로 명명
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);

  // 로그아웃
  // 로그아웃 시, localStorage에 저장된 유저의 token 정보들을 삭제 및 user정보 초기화
  const naverLogout = () => {
    // token 삭제
    localStorage.removeItem("com.naver.nid.access_token");
    localStorage.removeItem("com.naver.nid.oauth.state_token");
    //user정보 삭제
    localStorage.removeItem("userInfo");
    // reload : 새로고침
    window.location.reload();
  };

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
            {userInfo != null ? (
              // 로그인 o : 마이페이지버튼 + 로그아웃버튼
              <>
                <MyPageBtn userInfo={userInfo} />
                <LogoutBtn onClick={naverLogout}>Logout</LogoutBtn>
              </>
            ) : (
              // 로그인 x : 네이버로그인
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
