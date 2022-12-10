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
          <FirstMaskLinkBox href="/aboutMask/1st/Masinsa">1st</FirstMaskLinkBox>
          <SecondMaskLinkBox href="/aboutMask/2nd/Masinsa">
            2nd
          </SecondMaskLinkBox>
          <ThirdMaskLinkBox href="/aboutMask/3rd/Masinsa">3rd</ThirdMaskLinkBox>
        </Top3MaskSection>
      </div>
    </div>
  );
}

export default TopThree;
