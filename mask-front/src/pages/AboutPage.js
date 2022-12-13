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
import { getReviews } from "../api/review/getReviews";

function AboutPage() {
  // 파라미터를 통한 maskId 전달
  const { maskId } = useParams();
  // console.log("useParams", maskId);

  //  마스크요청

  const [mask, setMask] = useState([]);

  useEffect(() => {
    getMask({ maskId, setMask });
  }, []);

  // console.log("AboutPage - mask 불러오기 : ", mask);

  return (
    <div>
      <Main>
        <MaskAboutWrapper>
          {/* 현재 적용된 필터 확인 */}
          <CurrentFilterSection>
            <CurrentLocation mask={mask} />
          </CurrentFilterSection>
          {/* 마스크 정보 */}
          <MaskInfo mask={mask} />
          {/* 리뷰통계 */}
          <Analysis maskId={mask.id} />
          <hr></hr>
          {/* 상세정보 */}
          <MaskDetail maskId={mask.id} />
          {/* 리뷰창 */}
          <Reviews maskId={mask.id} />
        </MaskAboutWrapper>
      </Main>
    </div>
  );
}

export default AboutPage;
