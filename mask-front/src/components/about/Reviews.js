import React from "react";
import NaverReview from "./NaverReview";
import MemberReview from "./MemberReview";
import ReviewLists from "./ReviewLists";
import Pagination from "../Pagination";

// 수정이 필요한 부분 !
function Reviews({ naverReview, setNaverReview }) {
  return (
    <div>
      {/* 버튼이 눌렸을때, 네이버리뷰가 true면 NaverReview false면 회원리뷰 */}

      <div>
        <NaverReview />
      </div>
      <div>
        <MemberReview />
      </div>
    </div>
  );
}

export default Reviews;
