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

const Pagination3 = ({ page, setPage }) => {
  console.log(page);

  // 한번에 나오는 pageList
  const pageListOnce = [];
  // let i = page - 5;
  // if (page > 0 && i > 0) {
  for (let i = page - 5; i <= page + 5; i++) {
    if (i > 0) {
      pageListOnce.push(i);
    }
  }
  // }

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
              <PageLi
                key={page}
                onClick={() => {
                  setPage(page);
                }}
              >
                <PageSpan>{page}</PageSpan>
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
