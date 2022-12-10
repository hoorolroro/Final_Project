// 검색기능
import React from "react";
import SearchArea from "./SearchArea";
import SearchMaskLists from "./SearchMaskLists";
import Pagination from "../Pagination";
import styled from "styled-components";
import {
  SearchArticle,
  SearchBoxSection,
  SearchCenter,
  SearchLeftBlank,
  SearchRightBlank,
} from "../../styles/MainPageStyle/SearchStyle";

// SearchMaskList 보여주는 Section
const SearchMaskListSection = styled.section`
  // display: flex;
  // flex: nowrap;
  width: auto;
  height: 790px;
  padding: 2px;
  margin: 2px;
  border: 2px solid red;
`;

function Search() {
  return (
    <div>
      <SearchArticle>ALL MASINSA MASK</SearchArticle>
      <SearchBoxSection>
        <SearchLeftBlank></SearchLeftBlank>
        {/* 검색창 */}
        <SearchCenter>
          <SearchArea />
        </SearchCenter>
        <SearchRightBlank></SearchRightBlank>
      </SearchBoxSection>
      <SearchMaskListSection>
        {/* 검색된 마스크리스트 */}
        <SearchMaskLists />
        {/* 페이지네이션 */}
        <Pagination />
      </SearchMaskListSection>
    </div>
  );
}

export default Search;
