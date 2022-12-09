// 마스크 정보 불러오기
import React from "react";
import axios from "axios";

export const getMask = async ({ maskId, setMask }) => {
  const response = await axios.get("/mask", {
    maskId: { maskId },
  });

  // const response = await axios.get(
  // `https://jsonplaceholder.typicode.com/posts/${userId}`,
  // {
  // userId: { userId },
  // }
  // );

  setMask(response.data);
};
