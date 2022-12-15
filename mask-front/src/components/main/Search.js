// 검색기능
import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import SearchMaskLists from "./SearchMaskLists";
// import Pagination from "../Pagination";
import { Pagination } from "@mui/material";
import SortChange from "./SortChange";

import {
  SearchArticle,
  SearchBoxSection,
  SearchCenter,
  SearchLeftBlank,
  SortSection,
  SearchMaskListSection,
} from "../../styles/MainPageStyle";
import { getMainMask } from "../../api/mask/getMainMask";
import { getSearchMaskSort } from "../../api/mask/getSearchMaskSort";

// 메인페이지 마스크리스트 조회
function Search() {
  // api 완성되면 수정할 필요가 있음 !!!!!!

  // // 키워드 설정
  // const [keyword, setKeyWord] = useState(null);
  // console.log("keyword : ", keyword);

  // 정렬변경을 위한 상수선언
  const [sortCol, setSortCol] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // console.log(sortCol, " : ", sortOrder);

  // page 설정
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(6);

  // 마스크 리스트
  const [maskList, setMaskList] = useState([]);

  // 처음 페이지 렌더링 시 마스크 요청 : filterMaskSort 이용 ( getMainMask 로 하나 더 만듦)
  useEffect(() => {
    getMainMask({ page, size, sortCol, sortOrder, setMaskList, keyword });
    // console.log(maskList);
  }, [page, size, sortCol, sortOrder]);

  // 키워드 설정
  const [keyword, setKeyWord] = useState(null);

  // 검색 시 마스크 요청
  useEffect(() => {
    getSearchMaskSort({ keyword, sortCol, sortOrder, page, size, setMaskList });
  }, [page, size, sortCol, sortOrder, keyword]);

  return (
    <div>
      <hr></hr>
      <SearchArticle>ALL MASINSA MASK</SearchArticle>
      <hr></hr>
      {/* 검색창 */}
      <SearchBoxSection>
        {/* 왼쪽빈칸 */}
        <SearchLeftBlank></SearchLeftBlank>
        {/* 검색창부분 */}
        <SearchCenter>
          <SearchBox keyword={keyword} setKeyWord={setKeyWord} />
        </SearchCenter>
        {/* 정렬변경 */}
        <SortSection>
          <SortChange setSortCol={setSortCol} setSortOrder={setSortOrder} />
        </SortSection>
      </SearchBoxSection>
      {/* 마스크리스트 부분*/}
      <SearchMaskListSection>
        {/* 마스크리스트 */}
        <SearchMaskLists maskList={maskList} />
        {/* 페이지네이션 */}
        <Pagination />
      </SearchMaskListSection>
    </div>
  );
}

export default Search;
