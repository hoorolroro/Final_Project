import React, { useEffect, useState } from "react";
import WishBtn from "../WishBtn";
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

function FilterMaskList({ maskList }) {
  // console.log("FilterMaskLists : ", maskList);

  // 마스크리스트 길이
  // console.log(maskList.length);

  // const leftMaskList = [];
  // const rightMaskList = [];

  // for (let i = 0; i < maskList.length; i++) {
  //   if (i % 2 == 0) {
  //     leftMaskList[i] = maskList[i];
  //   } else if (i % 2 != 0) {
  //     rightMaskList[i] = maskList[i];
  //   }
  // }

  // console.log("leftMaskList :", leftMaskList);
  // console.log("rightMaskList :", leftMaskList);

  return (
    <div>
      <MakListDiv>
        {/* "/aboutMask/:maskId/Masinsa" */}
        <MaskSummaryBox>
          {/* 마스크썸네일 */}
          <MaskSummaryImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDVfMjgz%2FMDAxNjU0NDEwNjQzMzY2.XSC9J0M_Pb3IS9EWG-v-W6YRjpZmmwn2rSexOVL-WVYg.HXhVs_6-OueeEd7hoSkpymLLu0Ri98dzz0WylDRGP1Yg.PNG.xdbxdbx%2Fimage.png&type=sc960_832"></MaskSummaryImg>
          {/* 마스크내용 */}
          <MaskSummaryContent>
            <MaskSummaryTopDiv>
              <MaskSummaryTitleLinkBox href="http://localhost:3000/aboutMask/%EB%A7%88%EC%8A%A4%ED%81%ACA/Masinsa">
                1번 마스크
              </MaskSummaryTitleLinkBox>
              {/* 찜버튼 */}
              <WishBtn />
            </MaskSummaryTopDiv>
            {/* 가격 (링크) */}
            <MaskSummaryPriceLinkBox href="">15,000원</MaskSummaryPriceLinkBox>
            {/* 옵션 */}
            <MaskSummaryOption>
              <li>
                <i>Size : </i>
              </li>
            </MaskSummaryOption>
            <MaskScore>평점 : 4.5 ⭐</MaskScore>
          </MaskSummaryContent>
        </MaskSummaryBox>
        <MaskSummaryBox>
          {/* 마스크썸네일 */}
          <MaskSummaryImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MThfMjI4%2FMDAxNjYwNzQ5NTc5NzAw.LFwcx8FigyA5EbJDCN_AwwR0wJTw0GXxW5jwcFJAB3wg.GaZGYR4q8TZwJSoXUYp5oNZWm2mxYVLVhXnBY8hF5iAg.PNG.moonroad20%2F%25C0%25CF%25C7%25CF%25B4%25C2_%25C3%25E1%25BD%25C4%25C0%25CC_%25BF%25AC%25BA%25D0%25C8%25AB.png&type=a340"></MaskSummaryImg>
          {/* 마스크내용 */}
          <MaskSummaryContent>
            <MaskSummaryTopDiv>
              <MaskSummaryTitleLinkBox href="http://localhost:3000/aboutMask/%EB%A7%88%EC%8A%A4%ED%81%ACA/Masinsa">
                2번 마스크 test test test test test test
              </MaskSummaryTitleLinkBox>
              {/* 찜버튼 */}
              <WishBtn />
            </MaskSummaryTopDiv>
            {/* 가격 (링크) */}
            <MaskSummaryPriceLinkBox href="">15,000원</MaskSummaryPriceLinkBox>
            {/* 옵션 */}
            <MaskSummaryOption>
              <li>
                <i>Size : </i>
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

export default FilterMaskList;
