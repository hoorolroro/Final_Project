// 검색기능
import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import SearchMaskLists from "./SearchMaskLists";
// import Pagination from "../Pagination";
import { Pagination } from "@mui/material";
import styled from "styled-components";
import SortChange from "../SortChange";

import {
  SearchArticle,
  SearchBoxSection,
  SearchCenter,
  SearchLeftBlank,
  SortSection,
  SearchMaskListSection,
} from "../../styles/MainPageStyle";
import { getMask } from "../../api/mask/getMask";
import Pagination2 from "../Pagination2";
import Pagination3 from "../Pagination3";

function Search() {
  // 메인페이지 마스크리스트 조회
  // api 완성되면 수정할 필요가 있음 !!!!!!

  const [maskList, setMaskList] = useState([]);

  // // 한페이지에서 몇번까지 마스크 보여주나?
  // const [startNum, setStartNum] = useState(1); // 첫 마스크 No
  // const [endNum, setEndNum] = useState(6); // 마지막 마스크 No

  // useEffect(() => {
  //     getMask(setMaskList, startNum, endNum);
  //   }, []);

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
          <SearchBox />
        </SearchCenter>
        {/* 정렬변경 */}
        <SortSection>
          <SortChange />
        </SortSection>
      </SearchBoxSection>
      {/* 마스크리스트 부분*/}
      <SearchMaskListSection>
        {/* 마스크리스트 */}
        <SearchMaskLists maskList={maskList} />
        {/* 페이지네이션 */}
        <Pagination />
        {/* <Pagination3 /> */}
      </SearchMaskListSection>
    </div>
  );
}

export default Search;
