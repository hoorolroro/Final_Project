import React from "react";
import WishBtn from "../WishBtn";
import styled from "styled-components";
import {
  MaskInfoSection,
  MaskInfoContent,
  MaskBuyLink,
  MaskInfoMain,
  MaskThumnailImg,
  MaskTitle,
  BuyLinkBox,
  MaskOption,
  MaskPrice,
} from "../../styles/AboutPageStyle";
import SlidePhoto from "./SlidePhoto";
import { makeStyles } from "@mui/material";

function MaskInfo({ mask }) {
  // console.log("maskinfo:", { mask });
  // console.log("maskInfo :", images);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // mask 값들을 빼내서 사용하기
  return (
    <div>
      {mask ? (
        <MaskInfoSection>
          {/* 썸네일사진 */}
          <MaskThumnailImg src={mask.thumbnail}></MaskThumnailImg>
          <MaskInfoContent>
            {/* 이름 */}
            <MaskTitle>{mask.name}</MaskTitle>
            <MaskInfoMain>
              {/* 가격 */}
              <MaskPrice>{mask.price} 원</MaskPrice>
              {/* 찜버튼 */}
              <WishBtn maskId={mask.id} userInfo={userInfo} />
            </MaskInfoMain>
            {/* 옵션 */}
            <MaskOption>
              <li>{mask.blockingIndex}</li>
              <li>Size : {mask.size}</li>
              <li>Option : {mask.option}</li>
            </MaskOption>
            {/* 구매링크버튼 */}
            <MaskBuyLink>
              <BuyLinkBox href={mask.purchaseUrl} target="_blank">
                구매하러 가볼까요?
              </BuyLinkBox>
            </MaskBuyLink>
          </MaskInfoContent>
        </MaskInfoSection>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MaskInfo;
