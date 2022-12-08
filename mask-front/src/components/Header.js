// 맨 위: 마신사 로고, 마이페이지 버튼, 네이버 로그인 버튼, 차단지수 카테고리
import React from "react";
import HeaderFilter from "./HeaderFilter";
import LoginBtn from "./LoginBtn";
import MyPageBtn from "./MyPageBtn";

function Header() {
  return (
    <div>
      {/* 마신사로고 : home버튼 */}
      <a href="/">
        <h1>Masinsa</h1>
      </a>
      {/* 마이페이지버튼 */}
      <MyPageBtn />
      {/* 네이버로그인버튼 */}
      <LoginBtn />
      <HeaderFilter />
    </div>
  );
}

export default Header;
