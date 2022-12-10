import React from "react";
import axios from "axios";

export const putMemberReview = async ({ reviewId, score, content }) => {
  const response = axios.put("/member_review", {
    reviewId: { reviewId },
    score: { score },
    content: { content },
  });
};
