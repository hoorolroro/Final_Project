import React, { useState, useEffect } from "react";
// import Pagination from "../components/Pagination";
import FilterBox from "../components/productList/FilterBox";
import FilterMaskList from "../components/productList/FilterMaskList";
import styled from "styled-components";
import { Main } from "../styles/OtherStyles";
import SortChange2 from "../components/SortChange2";
import { Pagination } from "@mui/material";
import {
  FilterSection,
  FilterMaskListSection,
  SortSection2,
} from "../styles/ListPageStyle";

function ListPage() {
  // 리스트페이지 마스크리스트 조회
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
      <Main>
        {/* 필터가 들어있는 공간 */}
        <FilterSection>
          <FilterBox />
        </FilterSection>
        {/* 정렬변경 */}
        <SortSection2>
          <SortChange2 />
        </SortSection2>
        {/* 마스크 리스트공간 */}
        <FilterMaskListSection>
          {/* 필터걸린 마스크 리스트 */}
          <FilterMaskList maskList={maskList} />
          {/* 페이지네이션 */}
          <Pagination></Pagination>
        </FilterMaskListSection>
      </Main>
    </div>
  );
}

export default ListPage;
