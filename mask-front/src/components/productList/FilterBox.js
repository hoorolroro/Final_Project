import React from "react";
import CurrentLocation from "./CurrentLocation";
import ShapeLists from "./ShapeLists";
import SizeLists from "./SizeLists";

function FilterBox() {
  return (
    <div>
      {/* 현재 필터 위치 */}
      <CurrentLocation />
      {/* 마스크 형태 */}
      <ShapeLists />
      {/* 마스크 사이즈 */}
      <SizeLists />
    </div>
  );
}

export default FilterBox;
