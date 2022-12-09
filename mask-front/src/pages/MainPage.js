import React from "react";
import TopThree from "../components/main/TopThree";
import Search from "../components/main/Search";

function MainPage() {
  return (
    <div>
      {/* TOP3 */}
      <TopThree />
      {/* 키워드검색결과 띄워주는 부분 */}
      <br></br>
      <Search />
    </div>
  );
}

export default MainPage;
