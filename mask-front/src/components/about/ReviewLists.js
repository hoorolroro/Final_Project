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
