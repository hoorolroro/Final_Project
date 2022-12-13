import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { getFilter } from "../api/mask/getFilter";

function ListPage() {
  // 리스트페이지 마스크리스트 조회

  const [maskKF, setMaskKF] = useState("");
  const [maskSize, setMaskSize] = useState("");
  const [maskShape, setMaskShape] = useState("");
  const [maskList, setMaskList] = useState([]);

  // kf 파라미터 설정
  const { blockingindex } = useParams();
  // KF94 면 94 slice / KF-AD면 AD
  // console.log("ListPage : ", blockingindex.slice(-2, blockingindex.length));
  useEffect(() => {
    setMaskKF(blockingindex.slice(-2, blockingindex.length));
    // console.log(maskKF);
  });

  // console.log(maskShape);
  // console.log(maskSize);

  // 값이 바뀔때마다 axios 요청
  useEffect(() => {
    getFilter({ maskKF, maskSize, maskShape, setMaskList });
  }, [maskKF, maskSize, maskShape]);

  console.log(maskList);

  return (
    <div>
      <Main>
        {/* 필터가 들어있는 공간 */}
        <FilterSection>
          <FilterBox
            blockingindex={blockingindex}
            setMaskSize={setMaskSize}
            setMaskShape={setMaskShape}
          />
        </FilterSection>
        {/* 정렬변경 */}
        <SortChange2 />
        {/* 마스크 리스트공간 */}
        <FilterMaskListSection>
          {maskList ? (
            <>
              {/* 필터걸린 마스크 리스트 */}
              <FilterMaskList maskList={maskList} />
              {/* 페이지네이션 */}
              <Pagination></Pagination>
            </>
          ) : (
            <>없습니다</>
          )}
          {/* 필터걸린 마스크 리스트
          <FilterMaskList maskList={maskList} />
          페이지네이션
          <Pagination></Pagination> */}
        </FilterMaskListSection>
      </Main>
    </div>
  );
}

export default ListPage;
