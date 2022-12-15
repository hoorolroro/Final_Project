import React from "react";
import axios from "axios";

/* 상품 클릭 수 증가 */
export const putClick = async ({ maskId }) => {
  console.log(maskId);
  const response = axios.put(
    `http://localhost:8080/mask/click?maskId=${maskId}`
  );
};
