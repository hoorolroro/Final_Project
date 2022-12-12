import React from "react";
import NaverReview from "./NaverReview";
import MemberReview from "./MemberReview";
import styled from "styled-components";

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
  border: 2px solid red;
`;

// 수정이 필요한 부분 !
function Reviews() {
  return (
    <div>
      <hr></hr>
      <i>상세리뷰</i>
      <hr></hr>
      <ReviewSection>
        {/* 버튼이 눌렸을때, 네이버리뷰가 true면 NaverReview false면 회원리뷰 */}
        <div>
          <NaverReview />
        </div>
        <div>
          <MemberReview />
        </div>
      </ReviewSection>
    </div>
  );
}

export default Reviews;
