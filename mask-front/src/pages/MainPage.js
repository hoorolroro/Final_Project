import React, { useEffect, useState } from "react";
import TopThree from "../components/main/TopThree";
import Search from "../components/main/Search";
import styled from "styled-components";
import { Main } from "../styles/OtherStyles";
import { Top3Section } from "../styles/MainPageStyle/TopThreeStyle";
import { SearchSection } from "../styles/MainPageStyle/SearchStyle";
import { getTop3 } from "../api/mask/getTop3";
import { getMaskList } from "../api/mask/getMaskList";
import { useParams } from "react-router-dom";

function MainPage() {
  const { startNum, endNum } = useParams();

  const [top3, setTop3] = useState([]);
  const [maskList, setMaskList] = useState([]);

  useEffect(() => {
    getTop3({ setTop3 });
  }, []);

  useEffect(() => {
    getMaskList({ startNum, endNum, setMaskList });
  });

  return (
    <div>
      <Main>
        {/* TOP3 */}
        <Top3Section>
          <TopThree top3={top3} setTop3={setTop3} />
        </Top3Section>
        {/* 키워드검색결과 MakList 띄워주는 부분 */}
        <SearchSection>
          <Search maskList={maskList} setMaskList={setMaskList} />
        </SearchSection>
      </Main>
    </div>
  );
}

export default MainPage;
