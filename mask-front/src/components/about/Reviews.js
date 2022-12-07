import React from "react";
import NaverReview from "./NaverReview";
import MemberReview from "./MemberReview";
import ReviewLists from "./ReviewLists";
import Pagination from "../Pagination";

function Reviews() {
  return (
    <div>
      <NaverReview />
      <MemberReview />
      <ReviewLists />
      <Pagination />
    </div>
  );
}

export default Reviews;
