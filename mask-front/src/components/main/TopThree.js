// 인기 순위 3위
import React, { useState, useEffect } from "react";
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
} from "../../styles/MainPageStyle";
import { getTop3 } from "../../api/mask/getTop3";

const TopMaskImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

function TopThree() {
  // const [top3, setTop3] = useState([]);

  // useEffect(() => {
  //   getTop3({ setTop3 });
  // }, []);

  // // 마스크 세개 > 리스트형태 map으로 풀어주기
  // console.log("top3 : ", top3);

  // // const [first, setFirst] = useState([]);
  // // setFirst(top3[0]);
  // // const [second, setSecond] = useState([]);
  // // setSecond(top3[1]);
  // // const [third, setThird] = useState([]);
  // // setThird(top3[2]);

  return (
    <div>
      <Top3ArticleSection>
        <Top3BlankSection></Top3BlankSection>
        <Top3Article>MASINSA'S BEST</Top3Article>
        <IntroLinkBox href="Introduce/Masinsa">
          {/* Do you want know about MASNSA? */}
          거창한 MASINSA의 존재 이유
        </IntroLinkBox>
      </Top3ArticleSection>
      <div>
        <Top3MaskSection>
          {/* "/aboutMask/:maskId/Masinsa" */}
          {/* 1등 */}
          {/* <FirstMaskLinkBox href={`/aboutMask/${first.id}/Masinsa`}> */}
          <FirstMaskLinkBox href="">
            {/* 마스크 img */}
            {/* <TopMaskImg src={first.thumnail}/> */}
            <TopMaskImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140817_98%2Fshowfoot1_1408260005732b6YXb_GIF%2F1.gif&type=sc960_832_gif" />
          </FirstMaskLinkBox>
          {/* 2등 */}
          {/* <SecondMaskLinkBox href={`/aboutMask/${second.id}/Masinsa`}> */}
          <SecondMaskLinkBox href="">
            {/* <TopMaskImg src={second.thumnail}/> */}
            <TopMaskImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEyMDVfMTU4%2FMDAxNTQ0MDA3Mzk1MDc2.SaSfk3-dqFYrgK983yjlbvEpPo0V39kPpjRFD9mimd8g.Ic1ipGQ1Fj_X8nlHXAMydIBJ6-uQsu17H6nMyz9LYmMg.GIF.nang723%2FIMG_0815.GIF&type=sc960_832_gif" />
          </SecondMaskLinkBox>
          {/* 3등 */}
          {/* <ThirdMaskLinkBox href={`/aboutMask/${third.id}/Masinsa`}> */}
          <ThirdMaskLinkBox href="">
            {/* <TopMaskImg src=third.thumnail /> */}
            <TopMaskImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150426_257%2Fchlwnfl77_1430045178038MAXFp_GIF%2Fc2f2e29a-a3ce-4711-b246-0861e6a89640_20150123183507714.gif&type=sc960_832_gif" />
          </ThirdMaskLinkBox>
        </Top3MaskSection>
      </div>
    </div>
  );
}

export default TopThree;
