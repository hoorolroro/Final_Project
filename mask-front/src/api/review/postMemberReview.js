import React from "react";
import axios from "axios";

export const postMemberReview = async ({
  memberId,
  maskId,
  score,
  option,
  content,
}) => {
  const response = axios.post("/member_review", {
    memberId: { memberId },
    maskId: { maskId },
    score: { score },
    option: { option },
    content: { content },
  });
};
