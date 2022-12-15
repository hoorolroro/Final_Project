import React from "react";
import axios from "axios";

export const getMainMask = async ({
  sortCol,
  sortOrder,
  setMaskList,
  keyword,
}) => {
  // 처음 렌더링시만 사용!
  // keyword 값이 없을때
  if (keyword === "") {
    if (sortOrder != "") {
      // console.log("1");
      const response = await axios.get(
        `http://localhost:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}`
      );
      setMaskList(response.data.result);
    } else {
      // console.log("2");
      const response = await axios.get(
        `http://localhost:8080/mask/filter/sort?`
      );
      setMaskList(response.data.result);
    }
    // console.log("2");
    const response = await axios.get(`http://localhost:8080/mask/filter/sort?`);
    setMaskList(response.data.result);
  }
};
