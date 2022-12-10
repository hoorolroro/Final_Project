//정렬기준변경

import React from "react";

function SortChange() {
  return (
    <div>
      <div>
        <select>
          <option>정렬기준선택</option>
          <option>낮은가격순</option>
          <option>평점순</option>
          <option>인기순</option>
        </select>
      </div>
    </div>
  );
}

export default SortChange;
