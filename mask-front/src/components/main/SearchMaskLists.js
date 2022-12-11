import React from "react";
import WishBtn from "../WishBtn";
import styled from "styled-components";
import {
  MakListDiv,
  MaskSummaryBox,
  MaskSummaryImg,
  MaskSummaryContent,
  MaskSummaryOption,
  MaskSummaryPriceLinkBox,
  MaskSummaryTitleLinkBox,
  MaskSummaryTopDiv,
  MaskScore,
} from "../../styles/MaskListStyles";

function SearchMaskLists() {
  return (
    <div>
      <MakListDiv>
        {/* "/aboutMask/:maskId/Masinsa" */}
        <MaskSummaryBox>
          {/* 마스크썸네일 */}
          <MaskSummaryImg src="https://img.danawa.com/prod_img/500000/841/332/img/14332841_1.jpg?shrink=130:130&_v=20220120154245"></MaskSummaryImg>
          {/* 마스크내용 */}
          <MaskSummaryContent>
            <MaskSummaryTopDiv>
              <MaskSummaryTitleLinkBox href="http://localhost:3000/aboutMask/%EB%A7%88%EC%8A%A4%ED%81%ACA/Masinsa">
                1번 마스크입니다
              </MaskSummaryTitleLinkBox>
              {/* 찜버튼 */}
              <WishBtn />
            </MaskSummaryTopDiv>
            {/* 가격 (링크) */}
            <MaskSummaryPriceLinkBox href="http://localhost:3000/aboutMask/%EB%A7%88%EC%8A%A4%ED%81%ACA/Masinsa">
              15,000원
            </MaskSummaryPriceLinkBox>
            {/* 옵션 */}
            <MaskSummaryOption>
              <li>
                <i>Color : blue, pink, mint, yellow</i>
              </li>
              <li>
                <i>Size : XL, L, M, S, SS</i>
              </li>
            </MaskSummaryOption>
            <MaskScore>평점 : 4.5 ⭐</MaskScore>
          </MaskSummaryContent>
        </MaskSummaryBox>
        <MaskSummaryBox>
          {/* 마스크썸네일 */}
          <MaskSummaryImg src="https://img.danawa.com/prod_img/500000/841/332/img/14332841_1.jpg?shrink=130:130&_v=20220120154245"></MaskSummaryImg>
          {/* 마스크내용 */}
          <MaskSummaryContent>
            <MaskSummaryTopDiv>
              <MaskSummaryTitleLinkBox href="http://localhost:3000/aboutMask/%EB%A7%88%EC%8A%A4%ED%81%ACA/Masinsa">
                2번 마스크입니다
              </MaskSummaryTitleLinkBox>
              {/* 찜버튼 */}
              <WishBtn />
            </MaskSummaryTopDiv>
            {/* 가격 (링크) */}
            <MaskSummaryPriceLinkBox href="http://localhost:3000/aboutMask/%EB%A7%88%EC%8A%A4%ED%81%ACA/Masinsa">
              15,000원
            </MaskSummaryPriceLinkBox>
            {/* 옵션 */}
            <MaskSummaryOption>
              <li>
                <i>Color : blue, pink, mint, yellow</i>
              </li>
              <li>
                <i>Size : XL, L, M, S, SS</i>
              </li>
            </MaskSummaryOption>
            <MaskScore>평점 : 4.5 ⭐</MaskScore>
          </MaskSummaryContent>
        </MaskSummaryBox>
      </MakListDiv>
      <MakListDiv>
        {/* "/aboutMask/:maskId/Masinsa" */}
        <MaskSummaryBox>
          {/* 마스크썸네일 */}
          <MaskSummaryImg src="https://img.danawa.com/prod_img/500000/841/332/img/14332841_1.jpg?shrink=130:130&_v=20220120154245"></MaskSummaryImg>
          {/* 마스크내용 */}
          <MaskSummaryContent>
            <MaskSummaryTopDiv>
              <MaskSummaryTitleLinkBox href="http://localhost:3000/aboutMask/%EB%A7%88%EC%8A%A4%ED%81%ACA/Masinsa">
                3번 마스크입니다
              </MaskSummaryTitleLinkBox>
              {/* 찜버튼 */}
              <WishBtn />
            </MaskSummaryTopDiv>
            {/* 가격 (링크) */}
            <MaskSummaryPriceLinkBox href="http://localhost:3000/aboutMask/%EB%A7%88%EC%8A%A4%ED%81%ACA/Masinsa">
              15,000원
            </MaskSummaryPriceLinkBox>
            {/* 옵션 */}
            <MaskSummaryOption>
              <li>
                <i>Color : blue, pink, mint, yellow</i>
              </li>
              <li>
                <i>Size : XL, L, M, S, SS</i>
              </li>
            </MaskSummaryOption>
            <MaskScore>평점 : 4.5 ⭐</MaskScore>
          </MaskSummaryContent>
        </MaskSummaryBox>
        <MaskSummaryBox>
          {/* 마스크썸네일 */}
          <MaskSummaryImg src="https://img.danawa.com/prod_img/500000/841/332/img/14332841_1.jpg?shrink=130:130&_v=20220120154245"></MaskSummaryImg>
          {/* 마스크내용 */}
          <MaskSummaryContent>
            <MaskSummaryTopDiv>
              <MaskSummaryTitleLinkBox href="http://localhost:3000/aboutMask/%EB%A7%88%EC%8A%A4%ED%81%ACA/Masinsa">
                4번 마스크입니다
              </MaskSummaryTitleLinkBox>
              {/* 찜버튼 */}
              <WishBtn />
            </MaskSummaryTopDiv>
            {/* 가격 (링크) */}
            <MaskSummaryPriceLinkBox href="http://localhost:3000/aboutMask/%EB%A7%88%EC%8A%A4%ED%81%ACA/Masinsa">
              15,000원
            </MaskSummaryPriceLinkBox>
            {/* 옵션 */}
            <MaskSummaryOption>
              <li>
                <i>Color : blue, pink, mint, yellow</i>
              </li>
              <li>
                <i>Size : XL, L, M, S, SS</i>
              </li>
            </MaskSummaryOption>
            <MaskScore>평점 : 4.5 ⭐</MaskScore>
          </MaskSummaryContent>
        </MaskSummaryBox>
      </MakListDiv>
      {/* 6번까지 ! */}
    </div>
  );
}

export default SearchMaskLists;
