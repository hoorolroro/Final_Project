// 맨 위: 마신사 로고, 마이페이지 버튼, 네이버 로그인 버튼, 차단지수 카테고리
import React from "react";
import LoginBtn from "./LoginBtn";
import MyPageBtn from "./MyPageBtn";

function Header() {
  return (
    <div>
      <MyPageBtn />
      <LoginBtn />
    </div>
  );
}

export default Header;
