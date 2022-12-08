// 검색기능
import React from "react";
import SearchBox from "./SearchBox";
import SearchMaskLists from "./SearchMaskLists";
import Pagination from "../Pagination";

function Search() {
  return (
    <div>
      <SearchBox />
      <SearchMaskLists />
      <Pagination />
    </div>
  );
}

export default Search;
