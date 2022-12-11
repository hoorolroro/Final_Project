// 인기 순위 3위
import React from "react";
import styled from "styled-components";
import {
  Top3ArticleSection,
  Top3BlankSection,
  Top3Article,
  IntroLinkBox,
  Top3MaskSection,
  FirstMaskLinkBox,
  SecondMaskLinkBox,
  ThirdMaskLinkBox,
} from "../../styles/MainPageStyle/TopThreeStyle";

const TopMaskImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

function TopThree() {
  return (
    <div>
      <Top3ArticleSection>
        <Top3BlankSection></Top3BlankSection>
        <Top3Article>MASINSA'S BEST</Top3Article>
        <IntroLinkBox href="Introduce/Masinsa">
          {/* Do you want know about MASNSA? */}
          마신사만의 기준이 궁금하다면?
        </IntroLinkBox>
      </Top3ArticleSection>
      <div>
        <Top3MaskSection>
          {/* "/aboutMask/:maskId/Masinsa" */}
          {/* 1등 */}
          <FirstMaskLinkBox href="/aboutMask/1st/Masinsa">
            {/* 마스크 img */}
            <TopMaskImg src="https://img.danawa.com/prod_img/500000/961/647/img/17647961_1.jpg?shrink=130:130&_v=20220811161002" />
          </FirstMaskLinkBox>
          {/* 2등 */}
          <SecondMaskLinkBox href="/aboutMask/2nd/Masinsa">
            2nd
          </SecondMaskLinkBox>
          {/* 3등 */}
          <ThirdMaskLinkBox href="/aboutMask/3rd/Masinsa">3rd</ThirdMaskLinkBox>
        </Top3MaskSection>
      </div>
    </div>
  );
}

export default TopThree;
