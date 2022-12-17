// 인기 순위 3위
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Top3ArticleSection,
  Top3BlankSection,
  Top3Article,
  IntroLinkBox,
  Top3MaskSection,
  TopMaskInfo,
} from "../../styles/MainPageStyle";
import { TopMaskImg } from "../../styles/MainPageStyle";

function TopThree({ topMask }) {
  // console.log("topMask - TopThree", topMask);
  return (
    <div>
      <Top3ArticleSection>
        <Top3BlankSection></Top3BlankSection>
        <Top3Article>MASINSA'S BEST</Top3Article>
        <IntroLinkBox href="Introduce/Masinsa">
          {/* Do you want know about MASNSA? */}
          What is MASINSA?
        </IntroLinkBox>
      </Top3ArticleSection>
      <hr></hr>
      <div>
        {/* "/aboutMask/:maskId/Masinsa" */}
        <Top3MaskSection>
          {topMask ? (
            topMask.map((top) => (
              <div key={top.id}>
                <a href={`/aboutMask/${top.id}/Masinsa`}>
                  <TopMaskImg src={top.thumbnail} alt={top.name} />
                </a>
              </div>
            ))
          ) : (
            <></>
          )}
        </Top3MaskSection>
      </div>
    </div>
  );
}

export default TopThree;
