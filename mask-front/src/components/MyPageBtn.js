import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MyPageBtnStyle } from "../styles/HeaderStyle";

function MyPageBtn() {
  return (
    <div>
      <Link to="/:memberId/MyPage/Masinsa">
        <MyPageBtnStyle>Go MyPage</MyPageBtnStyle>
      </Link>
    </div>
  );
}
export default MyPageBtn;
