import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getReviews } from "../../api/review/getReviews";
import {
  EachReviewSection,
  ReviewTop,
  ReviewCenter,
  ReviewBottom,
} from "../../styles/AboutPageStyle";

//
function ReviewLists({ allReviews, size, page, setPage, setAllReviews }) {
  // console.log("ReviewLists : ", allReviews);

  // 페이지당 노출되는 maskList
  const reviewsPerPage = [];
  for (let i = size * (page - 1) + 1; i <= size * page; i++) {
    reviewsPerPage.push(i);
  }

  console.log(reviewsPerPage);

  useEffect(() => {
    getReviews({ page, setAllReviews });
  }, []);

  return (
    <div>
      {allReviews ? (
        allReviews.map((review) => {
          return (
            <div key={review.id}>
              <EachReviewSection>
                <ReviewTop>⭐ 평점 : {review.score}</ReviewTop>
                <ReviewCenter>
                  {/* <Review /> */}
                  {review.memberId ? (
                    <div>
                      <div>
                        id : {review.id} / {review.memberNickname}
                      </div>
                      <div>옵션명 : {review.option}</div>
                    </div>
                  ) : (
                    <div>
                      <div>id : {review.id}</div>
                      <div>옵션명 : {review.option}</div>
                    </div>
                  )}
                </ReviewCenter>
                <ReviewBottom>{review.content}</ReviewBottom>
              </EachReviewSection>
            </div>
          );
        })
      ) : (
        <div>
          <EachReviewSection>
            <h5>죄송합니다 T_T ..</h5>
            <h5>해당하는 리뷰가 존재하지 않습니다.</h5>
            <h5>다음에 다시 이용하시길 바랍니다.</h5>
          </EachReviewSection>
        </div>
      )}
    </div>
  );
}

export default ReviewLists;
