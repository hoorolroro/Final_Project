import React from "react";
import Header from "../components/Header";
import TopThree from "../components/main/TopThree";
import Search from "../components/main/Search";
import UpBtn from "../components/UpBtn";
import MyPageBtn from "../components/MyPageBtn";
import LoginBtn from "../components/LoginBtn";
import SearchBox from "../components/main/SearchBox";
import SearchMaskLists from "../components/main/SearchMaskLists";
import WishBtn from "../components/WishBtn";
import RecentView from "../components/RecentView";

function MainPage() {
  return (
    <div>
      {/* 헤더부분 */}
      <Header />
      <hr></hr>
      {/* TOP3 */}
      <TopThree />
      {/* 키워드검색결과 띄워주는 부분 */}
      <br></br>
      <Search />
    </div>
  );
}

export default MainPage;
