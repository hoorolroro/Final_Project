import React from "react";
import WishBtn from "../WishBtn";
import styled from "styled-components";
import {
  MaskListDiv,
  MaskSummaryBox,
  MaskSummaryImg,
  MaskSummaryContent,
  MaskSummaryOption,
  MaskSummaryPriceLinkBox,
  MaskSummaryTitleLinkBox,
  MaskSummaryTopDiv,
  MaskScore,
} from "../../styles/MaskListStyles";

function SearchMaskLists({ maskList }) {
  // console.log("SearchMaskLists : ", maskList);

  return (
    <div>
      <MaskListDiv>
        {/* "/aboutMask/:maskId/Masinsa" */}
        <MaskSummaryBox>
          {/* 마스크썸네일 */}
          <MaskSummaryImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160919_150%2Fgracein123_1474257281051y7aSP_GIF%2Fpikicast521773814.gif&type=sc960_832_gif"></MaskSummaryImg>
          {/* 마스크내용 */}
          <MaskSummaryContent>
            <MaskSummaryTopDiv>
              <MaskSummaryTitleLinkBox href="">
                1번 마스크입니다
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
            {/* 평점 */}
            <MaskScore>평점 : 4.5 ⭐</MaskScore>
          </MaskSummaryContent>
        </MaskSummaryBox>
      </MaskListDiv>

      {/* 6번까지 ! */}
    </div>
  );
}

export default SearchMaskLists;
