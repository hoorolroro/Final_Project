import React from "react";
import Header from "../components/Header";
import FilterBox from "../components/productList/FilterBox";
import FilterMaskList from "../components/productList/FilterMaskList";
import UpBtn from "../components/UpBtn";

function ListPage() {
  return (
    <div>
      <Header />
      <FilterBox />
      <FilterMaskList />
      <UpBtn />
    </div>
  );
}

export default ListPage;
