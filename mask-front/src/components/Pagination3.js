// index 부분 설정

// index size : 5
// 이전버튼(prevBtn), 다음버튼(nextBtn)

import React, { useState } from "react";
import styled from "styled-components";
import { getReviews } from "../api/review/getReviews";

const PageUl = styled.ul`
  float: center;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

const Pagination3 = ({ allReviews, size, page, setPage, setAllReviews }) => {
  // const [page, setPage] = useState();

  console.log("reviews", allReviews);
  // console.log(maskList.pageList);
  console.log(page);
  // 페이지 관련 정보는 과연 어디서 오는가...
  // page는 오지만 pageList는 안 올때 어떻게 해야 하는가?

  // maskList 갯수를 size로 나눠서 -> 1부터 그 몫 + 1까지 나열한게 pageList라고 해야할듯
  // const pageList = [];
  // for (let i = 1; i <= parseInt(allReviews.length / size) + 1; i++) {
  //   pageList.push(i);
  // }
  // console.log(pageList);
  // console.log(maskList.start);

  // 한번에 나오는 pageList
  const pageListOnce = [];
  for (let i = page; i <= page + 9; i++) {
    pageListOnce.push(i);
  }

  // 페이지당 노출되는 maskList
  // const reviewsPerPage = [];
  // for (let i = size * (page - 1) + 1; i <= size * page; i++) {
  //   reviewsPerPage.push(i);
  // }

  // console.log(reviewsPerPage);
  // console.log(reviewsPerPage[0]);
  console.log(pageListOnce);

  return (
    <div>
      <nav>
        <PageUl>
          {page - 1 ? (
            // 이전버튼
            <PageLi onClick={() => setPage(page - 1)}>◀</PageLi>
          ) : (
            <></>
          )}
          {pageListOnce ? (
            // 페이지번호 표시
            pageListOnce.map((page) => (
              <PageLi key={page}>
                <PageSpan
                  onClick={
                    () => {
                      setPage(page);
                      // onClick으로 setPage & getReviews 실행
                      // getReviews({ page, size, setAllReviews });
                      // 페이지 눌러서 allReviews 바뀌게 하는법?
                      setAllReviews(page);
                      console.log(allReviews);
                    }

                    // onClick={() => console.log(page)}
                    // onClick={() => setAllReviews(page)}
                  }
                >
                  {page}
                </PageSpan>
              </PageLi>
            ))
          ) : (
            <></>
          )}
          {page + 1 ? (
            // 다음버튼
            <PageLi onClick={() => setPage(page + 1)}>▶</PageLi>
          ) : (
            <></>
          )}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination3;
