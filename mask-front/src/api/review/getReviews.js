import React from "react";
import axios from "axios";

export const getReviews = async ({
  maskId,
  page,
  size,
  reviewType,
  setAllReviews,
}) => {
  const response = await axios.get(
    // `http://localhost:8080/review?maskId=${maskId}&page=${page}&size=${size}&reviewType=${reviewType}`
    "http://localhost:8080/review?maskId=1&page=1&size=5&reviewType=naver"
  );

  // return response.data;
  setAllReviews(response.data);
};
