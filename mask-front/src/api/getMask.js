// 마스크 정보 불러오기
import React from "react";

export const getMask = async ({ maskId, setMask }) => {
  const response = await axios.get(`http://localhost:8080/mask`, {
    maskId: { maskId },
  });

  setMask(response.data);
};
