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
    maskId: { maskId },
    content: { content },
    reviewType: "member",
  });

  setMemberReview(response.data.result);
};
