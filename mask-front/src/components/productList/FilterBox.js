import React from "react";
import styled from "styled-components";
import {
  ShapeListsSection,
  ShapeLi,
  SizeLi,
  SizeListsSection,
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
        <ShapeLi>
          <button>새부리형</button>
        </ShapeLi>
        <ShapeLi>
          <button>입체(3D)형</button>
        </ShapeLi>
        <ShapeLi>
          <button>덴탈형</button>
        </ShapeLi>
      </ShapeListsSection>
      <hr></hr>
      {/* 마스크 사이즈 */}
      <SizeListsSection>
        <SizeLi>
          <button>전체</button>
        </SizeLi>
        <SizeLi>
          <button>대형</button>
        </SizeLi>
        <SizeLi>
          <button>중형</button>
        </SizeLi>
        <SizeLi>
          <button>소형</button>
        </SizeLi>
        <SizeLi>
          <button>기타</button>
        </SizeLi>
      </SizeListsSection>
    </div>
  );
}

export default FilterBox;
