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
import Header from "../components/Header";
import { MaskListDiv, MaskSummaryBox } from "../styles/MaskListStyles";

function ListPage() {
  // 리스트페이지 마스크리스트 조회

  const [maskKF, setMaskKF] = useState("");
  const [maskSize, setMaskSize] = useState("");
  const [maskShape, setMaskShape] = useState("");
  const [maskList, setMaskList] = useState(0);

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
  }, [maskKF, maskSize, maskShape, FilterMaskList]);

  console.log("maskList : ", maskList);

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
        {maskList != null ? (
          <>
            <FilterMaskListSection>
              {/* 필터걸린 마스크 리스트 */}
              <FilterMaskList maskList={maskList} />
              {/* 페이지네이션 */}
              <Pagination></Pagination>
            </FilterMaskListSection>
          </>
        ) : (
          <>
            <FilterMaskListSection>
              <div style={{ marginTop: "10px" }}>
                <h4>해당 상품에 대한 MASINSA 내 검색 결과가 없습니다.</h4>
                <h6>다른 필터를 선택하여 다시 검색해 주세요</h6>
                <h6 style={{ color: "#0ea654" }}>
                  * 더 많은 마스크가 MASINSA에 모일 수 있도록 노력하겠습니다. *
                </h6>
                <h6>도움을 드리지 못해 죄송합니다.</h6>
              </div>
              <Pagination></Pagination>
            </FilterMaskListSection>
          </>
        )}
        {/* 필터걸린 마스크 리스트
          <FilterMaskList maskList={maskList} />
          페이지네이션
          <Pagination></Pagination> */}
      </Main>
    </div>
  );
}

export default ListPage;
