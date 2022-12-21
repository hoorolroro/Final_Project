// 마스크 정보 불러오기
import React from "react";
import axios from "axios";

export const getMask = async ({ maskId, setMask }) => {
  const response = await axios
    // .get(`http://localhost:8080/mask?maskId=${maskId}`)
    .get(`http://34.64.239.97:8080/mask?maskId=${maskId}`)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });

  // console.log("getMask : ", response.data);
  setMask(response.data);
  // return response.data;
};
