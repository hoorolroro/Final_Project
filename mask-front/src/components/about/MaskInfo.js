import React from "react";
import BuyBtn from "./BuyBtn";
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
} from "../../styles/AboutPageStyle";

function MaskInfo({ mask }) {
  console.log({ mask });

  // mask 값들을 빼내서 사용하기
  return (
    <div>
      <MaskInfoSection>
        {/* 썸네일사진 */}
        <MaskThumnailImg src="https://shopping-phinf.pstatic.net/main_2685867/26858677522.20211018155019.jpg?type=f300"></MaskThumnailImg>
        <MaskInfoContent>
          <MaskInfoTopSection>
            <MaskTitle>어쩌구마스크fdgdagfdagdagdagsagdgsaggsgs</MaskTitle>
            {/* 찜버튼 */}
            <WishBtn />
          </MaskInfoTopSection>
          <MaskInfoPrice>5,000원</MaskInfoPrice>
          <MaskInfoOption>
            <li>사이즈 : 대 / 중 / 소</li>
            <li>기타옵션 : ********* </li>
          </MaskInfoOption>
          {/* 구매링크버튼 */}
          <MaskBuyLink>
            <BuyBtn />
          </MaskBuyLink>
        </MaskInfoContent>
      </MaskInfoSection>
    </div>
  );
}

export default MaskInfo;
