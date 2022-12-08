import React from "react";
import Pagination from "../Pagination";
import WishBtn from "../WishBtn";
import SortChange from "../SortChange";

function FilterMaskList() {
  return (
    <div>
      {/* 정렬변경 */}
      <SortChange />
      {/* 마스크목록 */}
      <div>
        {/* "/aboutMask/:maskId/Masinsa" */}
        <h3>마스크목록</h3>
        <li>
          <a href="/aboutMask/마스크A/Masinsa">마스크A </a>
          {/* 찜버튼 */}
          <WishBtn />
        </li>
        <li>
          <a href="/aboutMask/마스크B/Masinsa">마스크B</a>
          <WishBtn />
        </li>
        <br></br>
      </div>
    </div>
  );
}

export default FilterMaskList;
