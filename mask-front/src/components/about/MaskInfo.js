import React from "react";
import WishBtn from "../WishBtn";
import styled from "styled-components";
import {
  MaskInfoSection,
  MaskInfoContent,
  MaskBuyLink,
  MaskInfoOption,
  MaskInfoPrice,
  MaskInfoTopSection,
  MaskThumnailImg,
  MaskTitle,
  BuyLinkBox,
} from "../../styles/AboutPageStyle";
import SlidePhoto from "./SlidePhoto";

function MaskInfo({ mask, images }) {
  // console.log("maskinfo:", { mask });
  // console.log("maskInfo :", images);

  // mask 값들을 빼내서 사용하기
  return (
    <div>
      <MaskInfoSection>
        {/* 썸네일사진 */}
        <MaskThumnailImg src={mask.thumbnail}></MaskThumnailImg>
        <MaskInfoContent>
          <MaskInfoTopSection>
            <MaskTitle>{mask.name}</MaskTitle>
            {/* 찜버튼 */}
            <WishBtn />
          </MaskInfoTopSection>
          <MaskInfoPrice>{mask.price} 원</MaskInfoPrice>
          <MaskInfoOption>
            <li>Size : {mask.size}</li>
            <li>Option : {mask.option}</li>
          </MaskInfoOption>
          {/* 구매링크버튼 */}
          <MaskBuyLink>
            <BuyLinkBox href={mask.purchaseUrl}>구매하러 가볼까요?</BuyLinkBox>
          </MaskBuyLink>
        </MaskInfoContent>
      </MaskInfoSection>
    </div>
  );
}

export default MaskInfo;
