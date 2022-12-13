import React from "react";
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
import { CurrentFilterSection } from "../../styles/OtherStyles";

function FilterBox() {
  return (
    <div>
      {/* 현재 필터 위치 */}
      <CurrentFilterSection>
        <CurrentLocation />
      </CurrentFilterSection>
      {/* 마스크 형태 */}
      <ShapeListsSection>
        <ShapeBtn>
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/새부리형.png`}
          ></MaskShapeImg>
          <MaskShapeName>새부리형</MaskShapeName>
        </ShapeBtn>
        <ShapeBtn>
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/삼단(입체)형.png`}
          ></MaskShapeImg>
          <MaskShapeName>삼단(입체)형</MaskShapeName>
        </ShapeBtn>
        <ShapeBtn>
          <MaskShapeImg
            src={`${process.env.PUBLIC_URL}/덴탈형.png`}
          ></MaskShapeImg>
          <MaskShapeName>덴탈형</MaskShapeName>
        </ShapeBtn>
      </ShapeListsSection>
      <hr></hr>
      {/* 마스크 사이즈 */}
      <SizeListsSection>
        <SizeBtn>▪ 전체</SizeBtn>
        <SizeBtn>▪ 대형</SizeBtn>
        <SizeBtn>▪ 중형</SizeBtn>
        <SizeBtn>▪ 소형</SizeBtn>
        <SizeBtn>▪ 기타</SizeBtn>
      </SizeListsSection>
      <hr></hr>
    </div>
  );
}

export default FilterBox;
