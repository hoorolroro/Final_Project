import React from "react";
import Header from "../components/Header";
import LoginBtn from "../components/LoginBtn";
import MyWishLists from "../components/personal/MyWishLists";

function MyPage() {
  const name = "고객";
  return (
    <div>
      <Header />
      <hr></hr>
      <h3>"안녕하세요"</h3>
      <h2>{name}님</h2>
      {/* 찜목록 */}
      <MyWishLists />
      {/* 로그인버튼 > 회원이면 로그아웃으로 떠서 로그아웃 ! */}
      <LoginBtn />
    </div>
  );
}

export default MyPage;
