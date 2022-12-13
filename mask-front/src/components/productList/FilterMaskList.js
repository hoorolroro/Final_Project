import React, { useEffect, useState } from "react";
import WishBtn from "../WishBtn";
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

function FilterMaskList({ maskList }) {
  console.log("FilterMaskLists 얍얍: ", maskList);

  return (
    <div>
      <MaskListDiv>
        {/* "/aboutMask/:maskId/Masinsa" */}
        {maskList ? (
          maskList.map((mask) => {
            return (
              <div key={mask.id}>
                <MaskSummaryBox>
                  {/* 마스크썸네일 */}
                  <MaskSummaryImg src={mask.thumnail}></MaskSummaryImg>
                  {/* 마스크내용 */}
                  <MaskSummaryContent>
                    <MaskSummaryTopDiv>
                      <MaskSummaryTitleLinkBox
                        href={`http://localhost:3000/aboutMask/${mask.id}/Masinsa`}
                      >
                        {mask.name}
                      </MaskSummaryTitleLinkBox>
                      {/* 찜버튼 */}
                      <WishBtn />
                    </MaskSummaryTopDiv>
                    {/* 가격 (링크) */}
                    <MaskSummaryPriceLinkBox
                      href={`http://localhost:3000/aboutMask/${mask.id}/Masinsa`}
                    >
                      {mask.price} 원
                    </MaskSummaryPriceLinkBox>
                    {/* 옵션 */}
                    <MaskSummaryOption>
                      <li>
                        <i>Size : {mask.size} </i>
                      </li>
                    </MaskSummaryOption>
                    <MaskScore>평점 : {mask.avgScore}⭐</MaskScore>
                  </MaskSummaryContent>
                </MaskSummaryBox>
              </div>
            );
          })
        ) : (
          <>false</>
        )}
      </MaskListDiv>

      {/* 6번까지 ! */}
    </div>
  );
}

export default FilterMaskList;
