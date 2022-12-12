// 검색기능
import React from "react";
import SearchBox from "./SearchBox";
import SearchMaskLists from "./SearchMaskLists";
import Pagination from "../Pagination";
import styled from "styled-components";
import {
  SearchArticle,
  SearchBoxSection,
  SearchCenter,
  SearchLeftBlank,
  SortSection,
  SearchMaskListSection,
} from "../../styles/MainPageStyle/SearchStyle";
import SortChange from "../SortChange";

function Search({ maskList, startNum, endNum }) {
  return (
    <div>
      <hr></hr>
      <SearchArticle>ALL MASINSA MASK</SearchArticle>
      <hr></hr>
      {/* 검색창 */}
      <SearchBoxSection>
        <SearchLeftBlank></SearchLeftBlank>
        <SearchCenter>
          <SearchBox />
        </SearchCenter>
        <SortSection>
          <SortChange />
        </SortSection>
      </SearchBoxSection>
      {/* 정렬변경 */}
      {/* 마스크리스트 부분*/}
      <SearchMaskListSection>
        {/* 마스크리스트 */}
        <SearchMaskLists />
        {/* 페이지네이션 */}
        <Pagination />
      </SearchMaskListSection>
    </div>
  );
}

export default Search;
