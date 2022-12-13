import React from "react";
import styled from "styled-components";
import { BuyLinkBox } from "../../styles/AboutPageStyle";

function BuyBtn({ purchaseUrl }) {
  return (
    <div>
      <BuyLinkBox href={purchaseUrl}>구매하러 가볼까요?</BuyLinkBox>
    </div>
  );
}

export default BuyBtn;
