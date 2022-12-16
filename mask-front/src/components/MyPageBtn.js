import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MyPageBtnStyle } from "../styles/HeaderStyle";

function MyPageBtn() {
  // 추후 수정하기

  const [isClick, setIsClick] = useState(false);

  if (isClick === true) {
    alert("로그인 후, 이용가능합니다");
    setIsClick(!isClick);
  }

  return (
    <div>
      <Link to="/:memberId/MyPage/Masinsa">
        <MyPageBtnStyle onClick={() => setIsClick(true)}>
          Go MyPage
        </MyPageBtnStyle>
      </Link>
    </div>
  );
}
export default MyPageBtn;
