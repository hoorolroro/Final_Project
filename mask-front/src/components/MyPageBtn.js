import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MyPageBtnStyle } from "../styles/HeaderStyle";
import LoginBtn from "./login/NaverLogin";

function MyPageBtn({ userInfo }) {
  const [isClick, setIsClick] = useState(false);

  if (isClick === true) {
    alert("MASINSA 로그인 후, 이용가능한 서비스입니다.");
    setIsClick(!isClick);
  }

  // console.log(userInfo);

  return (
    <div>
      {userInfo === null ? (
        <Link to="/Login/Masinsa">
          <MyPageBtnStyle onClick={() => setIsClick(true)}>
            MY PAGE
          </MyPageBtnStyle>
        </Link>
      ) : (
        <Link to="/:memberId/MyPage/Masinsa">
          <MyPageBtnStyle>MY PAGE</MyPageBtnStyle>
        </Link>
      )}
    </div>
  );
}
export default MyPageBtn;
