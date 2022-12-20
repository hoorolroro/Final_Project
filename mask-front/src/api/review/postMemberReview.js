import React from "react";
import axios from "axios";

export const postMemberReview = async ({
  memberId,
  maskId,
  content,
  reviewType,
  setMemberReview,
}) => {
  const response = await axios.post("http://localhost:8080/member_review", {
    memberId: { memberId },
    // memberId: 2,
    maskId: { maskId },
    content: { content },
    reviewType: { reviewType },
  });

  console.log("리뷰제출");
  setMemberReview(response.data.result);
};
