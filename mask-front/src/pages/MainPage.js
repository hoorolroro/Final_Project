import React from "react";
import Header from "../components/Header";
import TopThree from "../components/main/TopThree";
import Search from "../components/main/Search";
import UpBtn from "../components/UpBtn";

function MainPage() {
  return (
    <div>
      <Header />
      <TopThree />
      <Search />
      <UpBtn />
    </div>
  );
}

export default MainPage;
