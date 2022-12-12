import React from "react";
import styled from "styled-components";
import {
  EachReviewSection,
  ReviewTop,
  ReviewCenter,
  ReviewBottom,
} from "../../styles/AboutPageStyle";
//
function ReviewLists({ allReviews }) {
  console.log("ReviewLists : ", allReviews);

  return (
    <div>
      {allReviews ? (
        allReviews.map((review) => {
          return (
            <div key={review.id}>
              <EachReviewSection>
                <ReviewTop>⭐{review.score}</ReviewTop>
                <ReviewCenter>
                  {review.memberId ? (
                    <div>
                      {review.id} / {review.memberNickname} / {review.option}
                    </div>
                  ) : (
                    <div>
                      {review.id} / {review.option}
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
            <ReviewTop>죄송합니다. T_T </ReviewTop>
            <ReviewCenter>해당하는 리뷰가 존재하지 않습니다.</ReviewCenter>
            <ReviewBottom>다음에 다시 확인부탁드립니다. ^^</ReviewBottom>
          </EachReviewSection>
        </div>
      )}
    </div>
  );
}

export default ReviewLists;
