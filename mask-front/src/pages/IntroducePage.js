import React from "react";
import styled from "styled-components";
import { LogoImg } from "../styles/HeaderStyle";

function IntroducePage() {
  return (
    <div>
      {/* 상단의 내용 div */}
      <div>
        <p>
          <span>자신에게 꼭 맞는 마스크,</span>
          <span> 찾기 어려우셨다구요?</span>
        </p>
        <p>
          <span>마스크 후기</span>
          <span>를 꼼꼼히 찾아보는 것에 지치셨다구요?</span>
        </p>
        <p>
          <span>급하게 필요한 마스크,</span>
          <span>어떤 걸 사야할 지 막막하시다구요?</span>
        </p>
      </div>
      {/* Masinsa이용 div */}
      <div>
        <span>그렇다면,</span>
        <span>
          <h3>MASINSA</h3>
        </span>
        <span>저희를 이용해보세요!</span>
      </div>
      {/* 설명div */}
      <div>
        {/* 1번설명 div */}
        <div>
          <h4>
            <span>마음에 드는 마스크를 </span>
            <span>링크 연결</span>
            <span>을 통해 손쉽게 구매</span>
          </h4>
          <ul>
            네이버 최저가를 기준으로 가격을 측정하므로, 질 좋고 딱 맞는 저렴한
            마스크를 구매버튼을 통해 만나보실 수 있습니다.
          </ul>
        </div>
        {/* 2번설명 div */}
        <div>
          <h4>
            <span>실착용자의 리뷰를 통한</span>
            <span>간편 확인 후기 통계</span>
            <span>제공</span>
          </h4>
          <ul>
            여러 쇼핑몰의 마스크 착용 후기를 자연어 처리(NLP)로 분석하여
            마스크의 사이즈 및 착용감, 호흡 등에 대한 정보를 제공합니다.
          </ul>
        </div>
        {/* 3번 설명 div */}
        <div>
          <h4>
            <span>마신사가 직접 선별한 믿을 수 있는 </span>
            <span>Best 상품 확인</span>
          </h4>
          <ul>
            Masinsa’s Best는 해당 상품의 클릭수, 평점, 리뷰 등을 기준으로 선별된
            상품이며, 평점과 리뷰는 당사 및 타사의 정보를 합한 값을 기본으로
            합니다.
          </ul>
        </div>
      </div>
      {/* 상품목록연결링크 div */}
      <div>
        <a href="http://localhost:3000/MaskList/Masinsa/:blockingindex">
          Going to see Mask
        </a>
      </div>
    </div>
  );
}

export default IntroducePage;
