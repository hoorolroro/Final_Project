import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MyPageBtnStyle } from "../styles/HeaderStyle";

function MyPageBtn({ userInfo }) {
  const [isClick, setIsClick] = useState(false);

  if (isClick === true) {
    alert("로그인 후, 이용가능합니다");
    setIsClick(!isClick);
  }

  console.log(userInfo);

  return (
    <div>
      <Link to="/:memberId/MyPage/Masinsa">
        <MyPageBtnStyle>I'm {userInfo.nickname} 😃</MyPageBtnStyle>
      </Link>
    </div>
  );
}
export default MyPageBtn;
