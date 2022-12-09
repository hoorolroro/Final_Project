// 맨 위: 마신사 로고, 마이페이지 버튼, 네이버 로그인 버튼, 차단지수 카테고리
import React from "react";
import HeaderFilter from "./HeaderFilter";
import LoginBtn from "./LoginBtn";
import MyPageBtn from "./MyPageBtn";
import styled from "styled-components";
import {
  HeaderDiv,
  TopDiv,
  LogoImg,
  TopBtnDiv,
  BockingIndexDiv,
} from "../styles/HeaderStyle";

function Header() {
  return (
    <div>
      <HeaderDiv>
        <TopDiv>
          {/* 마신사로고 : home버튼 */}
          <a href="/">
            {/* 로고이미지 : public 폴더에 넣은 후, 경로지정 */}
            <LogoImg
              src={`${process.env.PUBLIC_URL}/MasinsaLogo.png`}
              alt="masinsa"
            ></LogoImg>
          </a>
          <TopBtnDiv>
            {/* 마이페이지버튼 */}
            <MyPageBtn />
            {/* 네이버로그인버튼 */}
            <LoginBtn />
          </TopBtnDiv>
        </TopDiv>
        <BockingIndexDiv>
          <HeaderFilter />
        </BockingIndexDiv>
      </HeaderDiv>
    </div>
  );
}

export default Header;
