//정렬기준변경
import React from "react";
import styled from "styled-components";

// 정렬기준 변경 select
const SortSelect = styled.select`
  width: 80px;
  float: right;
`;

function SortChange() {
  return (
    <div>
      <div>
        <SortSelect>
          <option>정렬기준</option>
          <option>낮은가격순</option>
          <option>평점순</option>
          <option>인기순</option>
        </SortSelect>
      </div>
    </div>
  );
}

export default SortChange;
