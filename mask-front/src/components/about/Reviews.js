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
  ReviewTotal,
  Totals,
  ReviewHead,
  Head,
  Heads,
} from "../../styles/AboutPageStyle";
import Pagination3 from "../Pagination3";
import { getReviewCount } from "../../api/review/getReviewCount";
import ReviewWrite from "./ReviewWrite";
import { getMember } from "../../api/member/getMember";

function Reviews({ maskId, mask, analysisinfo, memberId }) {
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
  }, [page, reviewType]);

  // console.log("AboutPage(Reviews) - review 불러오기 : ", allReviews);
  // console.log(reviewType);

  // 리뷰 있으면 띄워주고, 리뷰 없으면 alert 띄워주기

  // console.log("mask: ", mask);

  // 리뷰 갯수 가져오기
  const [reviewCount, setReviewCount] = useState();

  useEffect(() => {
    getReviewCount({ maskId, reviewType, setReviewCount });
  }, [maskId, reviewType]);

  // console.log("reviewCount", reviewCount);

  // 멤버정보 가져오기
  // const [memberId, setMember] = useState();

  // useEffect(() => {
  //   getMember({ memberId });
  // }, [memberId]);

  // console.log("memberId: ", memberId);
  // console.log("maskId: ", maskId);

  return (
    <div>
      <ReviewHead>
        <i>상세리뷰</i>
      </ReviewHead>
      {/* <ReviewWrite maskId={maskId} /> */}
      <ReviewSection>
        {/* 버튼이 눌렸을때, 네이버리뷰면 reviewType (naver) 회원리뷰면 member */}

        <ReviewBtnSection>
          {/* review타입에 따른 버튼 색 활성화 */}
          {reviewType == "naver" ? (
            <>
              <NaverReviewBtn_active
                onClick={() => {
                  setReviewType("naver");
                }}
              >
                Naver Review
              </NaverReviewBtn_active>
              <MasinsaReviewBtn
                onClick={() => {
                  setReviewType("member");
                }}
              >
                Member Review
              </MasinsaReviewBtn>
            </>
          ) : (
            <>
              <NaverReviewBtn
                onClick={() => {
                  setReviewType("naver");
                }}
              >
                Naver Review
              </NaverReviewBtn>
              <MasinsaReviewBtn_active
                onClick={() => {
                  setReviewType("member");
                }}
              >
                Member Review
              </MasinsaReviewBtn_active>
            </>
          )}
        </ReviewBtnSection>

        {/* 리뷰 총평 */}
        {/* maskId별로 avg_score 가져오기 */}
        {reviewType == "naver" ? (
          <>
            <ReviewTotal>
              <Totals>⭐ 네이버 별점: {mask.avgScore}</Totals>
              <Totals>💬 리뷰 {reviewCount}개</Totals>
            </ReviewTotal>
          </>
        ) : (
          <>
            <ReviewTotal>
              {/* <Totals>⭐ MASINSA 점수: {analysisinfo.score}</Totals> */}
              <Totals>💬 리뷰 {reviewCount}개</Totals>
            </ReviewTotal>
            <ReviewWrite
              maskId={maskId}
              memberId={memberId}
              reviewType={reviewType}
            />
          </>
        )}

        {/* 리뷰 내용 */}
        <ReviewContent>
          <ReviewLists
            allReviews={allReviews}
            page={page}
            setPage={setPage}
            size={size}
            setAllReviews={setAllReviews}
            reviewType={reviewType}
          />
        </ReviewContent>
        {allReviews.length > 0 ? (
          <Pagination3
            allReviews={allReviews}
            // size={size}
            page={page}
            setPage={setPage}
            setAllReviews={setAllReviews}
          />
        ) : (
          <></>
        )}
      </ReviewSection>
    </div>
  );
}

export default Reviews;
