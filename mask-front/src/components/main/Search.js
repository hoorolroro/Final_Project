// 검색기능
import React from "react";
import SearchBox from "./SearchBox";
import SearchMaskLists from "./SearchMaskLists";
import Pagination from "../Pagination";

function Search() {
  return (
    <div>
      {/* 검색창 */}
      <SearchBox />
      {/* 검색된 마스크리스트 */}
      <SearchMaskLists />
      {/* 페이지네이션 */}
      <Pagination />
    </div>
  );
}

export default Search;
