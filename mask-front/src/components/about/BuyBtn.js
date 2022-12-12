import React from "react";
import styled from "styled-components";

const BuyLinkBox = styled.a`
  outline: none;
  text-decoration: none;
  color: white;
  &:hover {
    color: #12de1a;
    border-bottom: 1px solid;
  }
  &:active {
    color: red;
  }
  // border: 1px solid red;
`;

function BuyBtn() {
  return (
    <div>
      <BuyLinkBox href="">구매하러 가볼까요?</BuyLinkBox>
    </div>
  );
}

export default BuyBtn;
