import React from "react";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import CurrentLocation from "../components/productList/CurrentLocation";
import FilterBox from "../components/productList/FilterBox";
import FilterMaskList from "../components/productList/FilterMaskList";
import ShapeLists from "../components/productList/ShapeLists";
import SizeLists from "../components/productList/SizeLists";
import UpBtn from "../components/UpBtn";

function ListPage() {
  return (
    <div>
      <Header />
      <hr></hr>
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
