import { Pagination } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ReviewLists from "../about/ReviewLists";

// 리뷰 Section
const ReviewSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 5px;
  margin: 5px;
  // border: 2px solid red;
`;

// 리뷰버튼 Section
const ReviewBtnSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  // margin: 5px;
  // border: 2px solid blue;
`;

// 리뷰버튼 ( Naver, Member )
const ReviewBtn = styled.button`
  width: 25%;
  height: 80%;
  margin: 5px;
  overflow: hidden;
  // border: 2px solid blue;
`;

// 리뷰내용 Section
const ReviewContent = styled.section`
  width: 95%;
  height: auto;
  padding: 5px;
  margin: 5px;
  // border: 2px solid blue;
`;

// 수정이 필요한 부분 !
function Reviews({ naverReview, setNaverReview }) {
  const [reviewType, setReviewType] = useState("");

  return (
    <div>
      <hr></hr>
      <i>상세리뷰</i>
      <hr></hr>
      <ReviewSection>
        {/* 버튼이 눌렸을때, 네이버리뷰가 true면 NaverReview false면 회원리뷰 */}
        <ReviewBtnSection>
          <ReviewBtn>Naver Review</ReviewBtn>
          <ReviewBtn>Member Review</ReviewBtn>
        </ReviewBtnSection>
        <ReviewContent>
          <ReviewLists reviewType={reviewType} />
        </ReviewContent>
        <Pagination></Pagination>
      </ReviewSection>
    </div>
  );
}

export default Reviews;
