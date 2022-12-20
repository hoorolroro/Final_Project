import React, { useEffect, useState } from "react";
import MaskInfo from "../components/about/MaskInfo";
import Analysis from "../components/about/Analysis";
import MaskDetail from "../components/about/MaskDetail";
import Reviews from "../components/about/Reviews";
import { Outlet, Route, Router, Routes, useParams } from "react-router-dom";
import { getMask } from "../api/mask/getMask";
import { Main } from "../styles/OtherStyles";
import CurrentLocation from "../components/productList/CurrentLocation";
import styled from "styled-components";
import { CurrentFilterSection } from "../styles/OtherStyles";
import { MaskAboutWrapper } from "../styles/AboutPageStyle";
import { getImage } from "../api/getImage";
import { RecentViewFunction } from "../components/RecentViewFunction";
import { getAnalysis } from "../api/analysis/getAnalysis";
import ReviewBtn from "../components/about/ReviewBtn";
import { getMember } from "../api/member/getMember";

function AboutPage() {
  // 파라미터를 통한 maskId 전달
  const { maskId } = useParams();
  // console.log("useParams", maskId);

  //  마스크요청
  const [mask, setMask] = useState([]);

  useEffect(() => {
    getMask({ maskId, setMask });
  }, [maskId]);

  // console.log("AboutPage - mask 불러오기 : ", mask);

  //  마스크이미지 요청
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImage({ maskId, setImages });
  }, [maskId]);

  // console.log("AboutPage - Image 불러오기 : ", images);

  // 마스크 분석정보 요청
  const [analysisinfo, setAnalysisInfo] = useState(null);

  useEffect(() => {
    getAnalysis({ maskId, setAnalysisInfo });
  }, [maskId]);

  // console.log(analysisinfo);

  // 멤버 요청
  // 멤버정보 가져오기
  const [memberId, setMemberId] = useState(2);
  const [member, setMember] = useState([]);

  useEffect(() => {
    getMember({ memberId, setMember });
  }, []);

  console.log("memberId: ", memberId);
  console.log("member: ", member);

  return (
    <div>
      <Main>
        <MaskAboutWrapper>
          {/* 현재 적용된 필터 확인 */}
          <CurrentFilterSection>
            <CurrentLocation mask={mask} />
          </CurrentFilterSection>
          {/* 마스크 정보 */}
          <MaskInfo maskId={maskId} mask={mask} />
          {/* 분석정보 */}
          <hr></hr>
          {analysisinfo ? <Analysis analysisinfo={analysisinfo} /> : <></>}
          {/* 리뷰보러가기 버튼 */}
          <ReviewBtn />
          {/* <Analysis analysisinfo={analysisinfo} /> */}
          {/* 상세정보 */}
          <MaskDetail images={images} />
          {/* 리뷰창 */}
          <Reviews
            mask={mask}
            maskId={maskId}
            analysisinfo={analysisinfo}
            memberId={memberId}
          />
          {/* 최근 본 상품 관련 메서드 실행  - sungmin 수정사항 */}
          <RecentViewFunction mask={mask} />
        </MaskAboutWrapper>
      </Main>
    </div>
  );
}

export default AboutPage;
