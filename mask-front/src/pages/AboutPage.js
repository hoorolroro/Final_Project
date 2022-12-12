import React, { useEffect, useState } from "react";
import MaskInfo from "../components/about/MaskInfo";
import Analysis from "../components/about/Analysis";
import MaskDetail from "../components/about/MaskDetail";
import Reviews from "../components/about/Reviews";
import { useParams } from "react-router-dom";
import { getMask } from "../api/mask/getMask";
import { Main } from "../styles/OtherStyles";
import CurrentLocation from "../components/productList/CurrentLocation";
import styled from "styled-components";
import { CurrentFilterSection } from "../styles/OtherStyles";
import { MaskAboutWrapper } from "../styles/AboutPageStyle";

function AboutPage() {
  const [mask, setMask] = useState([]);

  const { maskId } = useParams();

  useEffect(() => {
    getMask({ maskId, setMask });
  });

  console.log(mask);

  return (
    <div>
      <Main>
        <MaskAboutWrapper>
          {/* 현재 적용된 필터 확인 */}
          <CurrentFilterSection>
            <CurrentLocation />
          </CurrentFilterSection>
          {/* 마스크 정보 */}
          <MaskInfo mask={mask} />
          {/* 리뷰통계 */}
          <Analysis />
          {/* 상세정보 */}
          <MaskDetail />
          {/* 리뷰창 */}
          <Reviews />
        </MaskAboutWrapper>
      </Main>
    </div>
  );
}

export default AboutPage;
