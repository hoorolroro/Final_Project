import React from "react";
import styled from "styled-components";
import CurrentLocation from "./CurrentLocation";

// 현재 적용된 필터 Section
const CurrentFilterSection = styled.div`
  width: auto;
  height: 30px;
  padding-left: 5px;
  text-align: left;
  font-size: 13px;
  color: #868b8b;
  border: 2px solid red;
`;

// 마스크 형태 리스트 Section ( 새부리 / 입체 / 덴탈)
const ShapeListsSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 130px;
  padding: 10px;
  border: 2px solid red;
`;

// 마스크 사이즈 리스트 Section ( 전체 / 대형 / 중형 / 소형 / 기타)
const SizeListsSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 50px;
  margin-top: 5px;
  border: 2px solid red;
`;

// 마스크 형태 Li
const ShapeLi = styled.li`
  width: 30%;
  float: left;
  padding: 10px;
  // border: 1px solid blue;
`;

// 마스크 사이즈 Li
const SizeLi = styled.li`
  width: 15%;
  float: left;
  padding: 10px;
  // border: 1px solid blue;
`;

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
