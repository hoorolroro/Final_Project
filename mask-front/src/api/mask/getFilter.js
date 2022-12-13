import React from "react";
import axios from "axios";

export const getFilter = async ({
  maskKF,
  maskSize,
  maskShape,
  setMaskList,
}) => {
  const response = await axios.get(
    `http://localhost:8080/mask/filter?kf=${maskKF}&size=${maskSize}&shape=${maskShape}`
  );

  // URL 확인용
  console.log(
    "URL 확인",
    `http://localhost:8080/mask/filter?kf=${maskKF}&size=${maskSize}&shape=${maskShape}`
  );

  // console.log(response.data);

  return setMaskList(response.data);
};
