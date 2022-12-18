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
import MaskInfo from "../about/MaskInfo";

function TopThree({ topMask }) {
  // console.log("topMask - TopThree", topMask);

  const [isHover, setIsHover] = useState(0);
  // console.log(isHover);

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
                <a
                  href={`/aboutMask/${top.id}/Masinsa`}
                  style={{ textDecoration: "none" }}
                >
                  {isHover ? (
                    <>
                      {/* 마우스 오버시 Top3 마스크 정보보여줌 */}
                      <div
                        onMouseOut={() => setIsHover(!isHover)}
                        style={{
                          paddingTop: "10px",
                          width: "340px",
                          height: "340px",
                          // border: "1px solid #9a9a9a",
                          borderRadius: "15px",
                          backgroundImage: `url(${top.thumbnail})`, // 이미지로 배경하기
                          backgroundSize: "cover", // 이미지 크기 맞추기
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <TopMaskInfo>
                          <p
                            style={{
                              fontSize: "20px",
                              padding: "0px 20px",
                              margin: "0px",
                            }}
                          >
                            {top.name}
                          </p>
                          <p
                            style={{
                              color: "#FF7D04",
                              fontSize: "20px",
                              padding: "0px 20px",
                            }}
                          >
                            {top.price} 원
                          </p>
                          <li style={{ padding: "0px 20px" }}>
                            {top.blockingIndex}
                          </li>
                          <li style={{ padding: "0px 20px" }}>{top.size}</li>
                          <p style={{ padding: "0px 20px" }}>
                            평점 : {top.avgScore} ⭐
                          </p>
                        </TopMaskInfo>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* 마우스 오버 x 면 마스크 이미지 */}
                      <TopMaskImg
                        src={top.thumbnail}
                        alt={top.name}
                        onMouseOver={() => setIsHover(1)}
                      />
                    </>
                  )}
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
