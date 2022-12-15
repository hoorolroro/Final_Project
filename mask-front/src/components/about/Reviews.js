import { Pagination } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReviewLists from "../about/ReviewLists";
import { getReviews } from "../../api/review/getReviews";
import {
  ReviewSection,
  NaverReviewBtn,
  MasinsaReviewBtn,
  ReviewBtnSection,
  ReviewContent,
  NaverReviewBtn_active,
  MasinsaReviewBtn_active,
} from "../../styles/AboutPageStyle";
import Pagination2 from "../Pagination2";

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

  // console.log("AboutPage(Reviews) - review 불러오기 : ", allReviews);
  // console.log(reviewType);

  return (
    <div>
      <hr></hr>
      <i>상세리뷰</i>
      <hr></hr>
      <ReviewSection>
        {/* 버튼이 눌렸을때, 네이버리뷰면 reviewType (naver) 회원리뷰면 member */}
        <ReviewBtnSection>
          {/* review타입에 따른 버튼 색 활성화 */}
          {reviewType == "naver" ? (
            <>
              <NaverReviewBtn_active onClick={() => setReviewType("naver")}>
                Naver Review
              </NaverReviewBtn_active>
              <MasinsaReviewBtn onClick={() => setReviewType("member")}>
                Member Review
              </MasinsaReviewBtn>
            </>
          ) : (
            <>
              <NaverReviewBtn onClick={() => setReviewType("naver")}>
                Naver Review
              </NaverReviewBtn>
              <MasinsaReviewBtn_active onClick={() => setReviewType("member")}>
                Member Review
              </MasinsaReviewBtn_active>
            </>
          )}
        </ReviewBtnSection>
        {/* 리뷰 내용 */}
        <ReviewContent>
          <ReviewLists
            allReviews={allReviews}
            // currentPage={currentPage}
            page={page}
            setPage={setPage}
            size={size}
          />
        </ReviewContent>
        <Pagination />
        {/* <Pagination2 allReviews={allReviews} page={page} setPage={setPage} /> */}
      </ReviewSection>
    </div>
  );
}

export default Reviews;
