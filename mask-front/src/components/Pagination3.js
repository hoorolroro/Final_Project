// index 부분 설정

// index size : 5
// 이전버튼(prevBtn), 다음버튼(nextBtn)

import React, { useState } from "react";
import styled from "styled-components";
import { getReviews } from "../api/review/getReviews";
import { PageUl, PageLi, PageSpan } from "../styles/PaginationStyle";

const Pagination3 = ({ page, setPage }) => {
  // console.log(page);

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

  // console.log("pageListOnce", pageListOnce);

  return (
    <div>
      <nav>
        <PageUl>
          {page - 1 ? (
            // 이전버튼
            <PageLi
              onClick={() => {
                setPage(page - 1);
              }}
            >
              ◀
            </PageLi>
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
