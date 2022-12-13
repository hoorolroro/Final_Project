import React, { useEffect, useState } from "react";
import TopThree from "../components/main/TopThree";
import Search from "../components/main/Search";
import styled from "styled-components";
import { Main } from "../styles/OtherStyles";
import { Top3Section, SearchSection } from "../styles/MainPageStyle";
import { useParams } from "react-router-dom";

function MainPage() {
  // api 완성되면 테스트하기 : getTop3, getMaskList

  return (
    <div>
      <Main>
        {/* TOP3 */}
        <Top3Section>
          <TopThree />
        </Top3Section>
        {/* 키워드검색결과 MakList 띄워주는 부분 */}
        <SearchSection>
          <Search />
        </SearchSection>
      </Main>
    </div>
  );
}

export default MainPage;
