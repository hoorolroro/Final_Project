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
function ReviewLists({
  allReviews,
  size,
  page,
  setPage,
  setAllReviews,
  reviewType,
}) {
  // console.log("ReviewLists : ", allReviews);

  console.log(allReviews);

  return (
    <div>
      {/* {reviewType == "naver"} */}
      {allReviews.length > 0 ? (
        allReviews.map((review) => {
          return (
            <div key={review.id}>
              <EachReviewSection>
                {reviewType == "naver" ? (
                  <ReviewTop>⭐ 평점 : {review.score}</ReviewTop>
                ) : (
                  <></>
                )}
                <ReviewCenter>
                  {/* <Review /> */}
                  {review.memberId ? (
                    <div>
                      <div>
                        id : {review.memberId}
                        {/* 리뷰: {review} */}
                        {/* 닉네임: {review.memberNickname} */}
                      </div>
                      {/* <div>옵션명 : {review.option}</div> */}
                    </div>
                  ) : (
                    <div>
                      <div>id : {review.naverId}</div>
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
        // alert("리뷰가 없습니다. 다음에 다시 이용하시기 바랍니다.")
        <>
          <div>
            <EachReviewSection>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  margin: "10px",
                  padding: "5px",
                }}
              >
                <p>죄송합니다 T_T ..</p>
                <p>해당 상품의 {reviewType} Review 가 존재하지 않습니다.</p>
                <p>다음에 다시 이용하시길 바랍니다.</p>
                <h6 style={{ color: "#0ea654" }}>
                  * 더욱 발전한 MASINSA가 될 수 있도록 노력하겠습니다. *
                </h6>
                <p>이용해주셔서 감사합니다.</p>
              </div>
            </EachReviewSection>
          </div>
        </>
      )}
    </div>
  );
}

export default ReviewLists;
