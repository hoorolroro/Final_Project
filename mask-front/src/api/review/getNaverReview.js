import React from "react";
import axios from "axios";

export const getNaverReview = async ({
  maskId,
  page,
  size,
  reviewType,
  setNaverReview,
}) => {
  const response = await axios.get(
    // `http://localhost:8080/review?maskId=${maskId}&page=${page}&size=${size}&reviewType=${reviewType}`
    "http://localhost:8080/review?maskId=1&page=2&size=5&reviewType=naver"
  );

  // return response.data;

  setNaverReview(response.data);
};
