import React from "react";
import axios from "axios";

export const getNaverReview = async ({ reviewId }) => {
  const response = axios.get("/naver_review", {
    reviewId: { reviewId },
  });
};
