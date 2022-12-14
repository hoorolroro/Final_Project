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
import { getImage } from "../api/getImage";

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

  //  마스크이미지 요청
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImage({ maskId, setImages });
  }, []);

  // console.log("AboutPage - Image 불러오기 : ", images);

  /* 최근 본 상품 - sungmin */
  useEffect(() => {
    // 우선적으로, localStorage에 있는 데이터(최근본상품) 가져오기
    let watchArr = localStorage.getItem("watchedMaskId");

    // 저장된 데이터가 없으면 새로운 배열 형성
    if (watchArr == null) {
      watchArr = [];
    } else {
      // 만약, 저장된 데이터가 있으면 JSON -> object로 변경하여 저장
      watchArr = JSON.parse(watchArr);
    }

    // 현재 aboutPage의 maskId를 watchArr배열에 저장
    watchArr = watchArr.concat(maskId);
    // console.log("watchArr", watchArr);

    // 중복 값 제거 ( 같은 상품은 한개니까 ..)
    watchArr = new Set(watchArr);

    // set 자료형으로 바뀐 watchArr를 배열로 변경
    watchArr = [...watchArr];

    // 만약 최근 본 상품이 3개가 넘어가면 shift를 통해 앞에 값 삭제
    if (watchArr.length > 3) {
      watchArr.shift();
    }

    // localStorage에 watchArr(최근본상품) 데이터를 JSON 자료형으로 저장
    localStorage.setItem("watchedMaskId", JSON.stringify(watchArr));
  }, []);

  return (
    <div>
      <Main>
        <MaskAboutWrapper>
          {/* 현재 적용된 필터 확인 */}
          <CurrentFilterSection>
            <CurrentLocation mask={mask} />
          </CurrentFilterSection>
          {/* 마스크 정보 */}
          <MaskInfo mask={mask} images={images} />
          {/* 리뷰통계 */}
          <Analysis maskId={mask.id} />
          {/* 상세정보 */}
          <MaskDetail images={images} />
          {/* 리뷰창 */}
          <Reviews maskId={mask.id} />
        </MaskAboutWrapper>
      </Main>
    </div>
  );
}

export default AboutPage;
