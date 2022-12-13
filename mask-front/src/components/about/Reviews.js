import { Pagination } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReviewLists from "../about/ReviewLists";
import { getReviews } from "../../api/review/getReviews";
import {
  ReviewSection,
  ReviewBtn,
  ReviewBtnSection,
  ReviewContent,
} from "../../styles/AboutPageStyle";

function Reviews({ maskId }) {
  // getReview를 위한 파라미터 설정

  // 리뷰페이지 번호 : 처음 1 에서 버튼 누를때마다 변경됨
  const [page, setPage] = useState(1);

  // 리뷰개수 : 10개로 default 지정 ( 시간되면 정렬갯수변경 만들기 )
  const [size, setSize] = useState(10);

  // 리뷰타입 : 버튼 누르면 naver 혹은 member로 변경됨
  // 기본값은 naver
  const [reviewType, setReviewType] = useState("naver");

  // 리뷰데이터
  const [allReviews, setAllReviews] = useState([]);

  // 리뷰 요청
  useEffect(() => {
    getReviews({ maskId, page, size, reviewType, setAllReviews });
  }, []);

  console.log("AboutPage(Reviews) - review 불러오기 : ", allReviews);
  console.log(reviewType);

  return (
    <div>
      <hr></hr>
      <i>상세리뷰</i>
      <hr></hr>
      <ReviewSection>
        {/* 버튼이 눌렸을때, 네이버리뷰가 true면 NaverReview false면 회원리뷰 */}
        <ReviewBtnSection>
          <ReviewBtn onClick={() => setReviewType("naver")}>
            Naver Review
          </ReviewBtn>
          <ReviewBtn onClick={() => setReviewType("member")}>
            Member Review
          </ReviewBtn>
        </ReviewBtnSection>
        <ReviewContent>
          <ReviewLists allReviews={allReviews} />
        </ReviewContent>
        <Pagination />
      </ReviewSection>
    </div>
  );
}

export default Reviews;
