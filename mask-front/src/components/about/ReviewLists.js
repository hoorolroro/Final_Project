import React from "react";
import styled from "styled-components";

// 각각의 리뷰칸 Section
const EachReviewSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-item: center;
  width: auto;
  height: 120px;
  margin-bottom: 10px;
  padding: 1px;
  border: 1px solid #9a9a9a;
  border-style: none none double;
`;

// 리뷰Top : score
const ReviewTop = styled.div`
  width: auto;
  height: 20%;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  margin: 5px;
  padding: 1px;
  // border: 1px solid red;
`;

// 리뷰Center : id + option
const ReviewCenter = styled.div`
  width: auto;
  height: 20%;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  margin: 5px;
  // border: 1px solid red;
`;

// 리뷰Bottom : 내용
const ReviewBottom = styled.div`
  width: auto;
  height: 50%;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  margin: 5px;
  // border: 1px solid red;
`;

//
function ReviewLists({ reviewType }) {
  // getReview (reviewType)

  return (
    <div>
      <EachReviewSection>
        <ReviewTop>⭐</ReviewTop>
        <ReviewCenter>id / option</ReviewCenter>
        <ReviewBottom>너무 좋아요</ReviewBottom>
      </EachReviewSection>
      <EachReviewSection>
        <ReviewTop>⭐</ReviewTop>
        <ReviewCenter>id / option</ReviewCenter>
        <ReviewBottom>너무 좋아요</ReviewBottom>
      </EachReviewSection>
      <EachReviewSection>
        <ReviewTop>⭐</ReviewTop>
        <ReviewCenter>id / option</ReviewCenter>
        <ReviewBottom>너무 좋아요</ReviewBottom>
      </EachReviewSection>
    </div>
  );
}

export default ReviewLists;
