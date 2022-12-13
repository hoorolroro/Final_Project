import React, { useState } from "react";
import styled from "styled-components";
import {
  ShapeListsSection,
  ShapeBtn,
  SizeBtn,
  SizeListsSection,
  MaskShapeImg,
  MaskShapeName,
} from "../../styles/ListPageStyle";
import CurrentLocation from "./CurrentLocation";

function FilterBox({ blockingindex, setMaskSize, setMaskShape }) {
  // 사이즈, 형태 설정값 모두 지우기
  const removeAll = () => {
    setMaskShape("");
    setMaskSize("");
  };

  return (
    <div>
      {/* 현재 필터 위치 */}
      <div
        style={{
          width: "auto",
          padding: "10px 15px",
          textAlign: "left",
          fontSize: "12px",
          color: "#9A9A9A",
          borderStyle: "none none double",
        }}
      >
        <CurrentLocation />
      </div>
      {/* 마스크 형태 */}
      <ShapeListsSection>
        <ShapeBtn
          onClick={() => {
            removeAll();
          }}
        >
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/지구마스크.png`}
          ></MaskShapeImg>
          <MaskShapeName>전체</MaskShapeName>
        </ShapeBtn>
        <ShapeBtn onClick={() => setMaskShape("새부리형")}>
          {/* 마스크 이미지 */}
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/새부리형.png`}
          ></MaskShapeImg>
          {/* 마스크 형태 */}
          <MaskShapeName>새부리형</MaskShapeName>
        </ShapeBtn>
        <ShapeBtn onClick={() => setMaskShape("입체형")}>
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/입체형.png`}
          ></MaskShapeImg>
          <MaskShapeName>입체형</MaskShapeName>
        </ShapeBtn>
        <ShapeBtn onClick={() => setMaskShape("덴탈형")}>
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/덴탈형.png`}
          ></MaskShapeImg>
          <MaskShapeName>덴탈형</MaskShapeName>
        </ShapeBtn>
      </ShapeListsSection>
      {/* 마스크 사이즈 */}
      <SizeListsSection>
        <SizeBtn onClick={() => setMaskSize("대형")}>▪ 대형</SizeBtn>
        <SizeBtn onClick={() => setMaskSize("중형")}>▪ 중형</SizeBtn>
        <SizeBtn onClick={() => setMaskSize("소형")}>▪ 소형</SizeBtn>
        <SizeBtn onClick={() => setMaskSize("기타")}>▪ 기타</SizeBtn>
      </SizeListsSection>
    </div>
  );
}

export default FilterBox;
