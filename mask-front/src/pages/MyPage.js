import React, { useEffect, useState } from "react";
import LoginBtn from "../components/LoginBtn";
import MyWishLists from "../components/personal/MyWishLists";
import { LogoutBtn } from "../styles/HeaderStyle";

function MyPage() {
  // 로그인시, 로컬에 저장된 userInfo
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [nickname, setNickName] = useState("고객");

  useEffect(() => {
    if (userInfo) {
      setNickName(userInfo.nickname);
    }
  }, []);

  useEffect(() => {});

  return (
    <div>
      <h3>"안녕하세요"</h3>
      <h2>{nickname} 님 🙂</h2>
      {/* 찜목록 */}
      <MyWishLists />
    </div>
  );
}

export default MyPage;
