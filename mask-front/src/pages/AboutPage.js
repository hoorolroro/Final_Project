import React, { useEffect, useState } from "react";
import MaskInfo from "../components/about/MaskInfo";
import Analysis from "../components/about/Analysis";
import MaskDetail from "../components/about/MaskDetail";
import Reviews from "../components/about/Reviews";
import { useParams } from "react-router-dom";
import { getMask } from "../api/mask/getMask";

function AboutPage() {
  const [mask, setMask] = useState([]);

  const { maskId } = useParams();

  useEffect(() => {
    getMask({ maskId, setMask });
  });

  console.log(mask);

  return (
    <div>
      {/* 마스크기본정보 */}
      <MaskInfo mask={mask} />
      {/* 리뷰통계 */}
      <Analysis />
      {/* 상세정보 */}
      <MaskDetail />
      {/* 리뷰창 */}
      <Reviews />
    </div>
  );
}

export default AboutPage;
