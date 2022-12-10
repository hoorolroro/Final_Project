import React from "react";
import TopThree from "../components/main/TopThree";
import Search from "../components/main/Search";
import styled from "styled-components";
import { Main } from "../styles/OtherStyles";
import { Top3Section } from "../styles/MainPageStyle/TopThreeStyle";
import { SearchSection } from "../styles/MainPageStyle/SearchStyle";

function MainPage() {
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
