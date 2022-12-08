import React from "react";
import WishBtn from "../WishBtn";
import SortChange from "../SortChange";

function SearchMaskLists() {
  return (
    <div>
      {/* 정렬변경 */}
      <SortChange />
      <div>
        <h3>마스크목록</h3>
        {/* "/aboutMask/:maskId/Masinsa" */}
        <li>
          <a href="/aboutMask/마스크A/Masinsa">마스크A</a>
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

export default SearchMaskLists;
