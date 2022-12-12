import React from "react";
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
          <FilterMaskList />
          {/* 페이지네이션 */}
          <Pagination></Pagination>
        </FilterMaskListSection>
      </Main>
    </div>
  );
}

export default ListPage;
