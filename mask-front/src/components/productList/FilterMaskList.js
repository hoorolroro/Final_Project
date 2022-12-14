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
  // console.log("FilterMaskLists : ", maskList);

  /* 클릭 수 증가 - sungmin 수정사항 */
  // 상품상세페이지에 진입하면 click 수 증가 시킴!
  // useEffect(() => {
  //   putClick({ maskId });
  // }, [maskId]);

  return (
    <div>
      {/* "/aboutMask/:maskId/Masinsa" */}
      <MaskListDiv>
        {maskList ? (
          maskList.map((mask) => {
            return (
              <div key={mask.id}>
                <MaskSummaryBox>
                  {/* 마스크썸네일 */}
                  {mask.thumbnail ? (
                    <>
                      <a
                        href={`http://localhost:3000/aboutMask/${mask.id}/Masinsa`}
                      >
                        <MaskSummaryImg src={mask.thumbnail}></MaskSummaryImg>
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={`http://localhost:3000/aboutMask/${mask.id}/Masinsa`}
                      >
                        <MaskSummaryImg
                          src={`${process.env.PUBLIC_URL}/NoImage.jpg`}
                        ></MaskSummaryImg>
                      </a>
                    </>
                  )}
                  {/* <MaskSummaryImg src={mask.thumbnail}></MaskSummaryImg> */}
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
          <></>
        )}
      </MaskListDiv>
    </div>
  );
}

export default FilterMaskList;
