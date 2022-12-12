import React, { useEffect, useState } from "react";
import MaskInfo from "../components/about/MaskInfo";
import Analysis from "../components/about/Analysis";
import MaskDetail from "../components/about/MaskDetail";
import Reviews from "../components/about/Reviews";
import { useParams } from "react-router-dom";
import { getMask } from "../api/mask/getMask";
import { getNaverReview } from "../api/review/getNaverReview";

function AboutPage() {
  const { maskId, page, size, reviewType } = useParams();

  const [mask, setMask] = useState([]);
  const [naverReview, setNaverReview] = useState([]);

  useEffect(() => {
    getMask({ maskId, setMask });
  }, []);

  useEffect(() => {
    getNaverReview({ maskId, page, size, reviewType, setNaverReview });
  }, []);

  console.log(mask);
  console.log(naverReview);

  return (
    <div>
      {/* 마스크기본정보 */}
      <MaskInfo mask={mask} maskId={maskId} />
      {/* 리뷰통계 */}
      <Analysis />
      {/* 상세정보 */}
      <MaskDetail mask={mask} />
      {/* 리뷰창 */}
      <Reviews naverReview={naverReview} setNaverReview={setNaverReview} />
    </div>
  );
}

export default AboutPage;
