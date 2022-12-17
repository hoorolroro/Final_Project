// 마스크 정보 불러오기
import React from "react";
import axios from "axios";

export const getMask = async ({ maskId, setMask }) => {
  const response = await axios.get(
    `http://localhost:8080/mask?maskId=${maskId}`
  );

  // console.log("getMask : ", response.data);
  setMask(response.data);
  // return response.data;
};
