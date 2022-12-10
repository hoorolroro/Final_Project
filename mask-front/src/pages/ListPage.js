import React from "react";
import Pagination from "../components/Pagination";
import FilterBox from "../components/productList/FilterBox";
import FilterMaskList from "../components/productList/FilterMaskList";

function ListPage() {
  return (
    <div>
      {/* 필터가 들어있는 공간 */}
      <FilterBox />
      {/* 필터걸린 마스크 리스트 */}
      <FilterMaskList />
      {/* 페이지네이션 */}
      <Pagination />
    </div>
  );
}

export default ListPage;
