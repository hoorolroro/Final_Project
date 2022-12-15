import React, { useState, useEffect } from "react";
// import Pagination from "../components/Pagination";
import FilterBox from "../components/productList/FilterBox";
import FilterMaskList from "../components/productList/FilterMaskList";
import { Main } from "../styles/OtherStyles";
import SortChange2 from "../components/SortChange2";
import { Pagination } from "@mui/material";
import { FilterSection, FilterMaskListSection } from "../styles/ListPageStyle";
import { useParams } from "react-router-dom";
import { getFilterMaskSort } from "../api/mask/getFilterMaskSort";
import Pagination3 from "../components/Pagination3";

function ListPage() {
  // kf 파라미터 설정
  const { blockingindex } = useParams();
  // KF94 면 94 slice / KF-AD면 AD
  // console.log("ListPage : ", blockingindex.slice(-2, blockingindex.length));
  const maskKF = blockingindex.slice(-2, blockingindex.length);

  const [maskSize, setMaskSize] = useState("");
  const [maskShape, setMaskShape] = useState("");
  const [sortCol, setSortCol] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const page = 1; // currentPage
  const size = 5; // Pagination Size

  // 마스크리스트
  const [maskList, setMaskList] = useState([]);

  // 값이 바뀔때마다 axios 요청
  useEffect(() => {
    getFilterMaskSort({
      sortCol,
      sortOrder,
      page,
      size,
      maskKF,
      maskSize,
      maskShape,
      setMaskList,
    });
  }, [sortCol, sortOrder, page, size, maskKF, maskSize, maskShape]);

  // console.log("maskList : ", maskList);

  // 필터 버튼 상태가 변경되었는 지 확인을 위한 isChange
  const [isChange, setIsChange] = useState(false);
  // console.log(isChange);

  return (
    <div>
      <Main>
        {/* 필터가 들어있는 공간 */}
        <FilterSection>
          <FilterBox
            blockingindex={blockingindex}
            setMaskSize={setMaskSize}
            setMaskShape={setMaskShape}
            maskShape={maskShape}
            setIsChange={setIsChange}
          />
        </FilterSection>
        {/* 정렬변경 */}
        <SortChange2
          sortCol={sortCol}
          sortOrder={sortOrder}
          setSortCol={setSortCol}
          setSortOrder={setSortOrder}
          isChange={isChange}
          setIsChange={setIsChange}
        />
        {/* 마스크 리스트공간 */}
        {maskList.length >= 1 ? (
          <>
            <FilterMaskListSection>
              {/* 필터걸린 마스크 리스트 */}
              <FilterMaskList maskList={maskList} />
              {/* 페이지네이션 */}
              {/* <Pagination></Pagination> */}
              <Pagination3
                maskList={maskList}
                page={page}
                size={size}
                // onClick={() => console.log("page")}
              />
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
              {/* <Pagination></Pagination> */}
              <Pagination3 maskList={maskList} />
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
