import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginBtnStyle } from "../styles/HeaderStyle";

function LoginBtn() {
  return (
    <div>
      {/* 링크 변경하기 ! */}
      <a href="">
        <LoginBtnStyle>N 네이버로그인</LoginBtnStyle>
      </a>
    </div>
  );
}

export default LoginBtn;
