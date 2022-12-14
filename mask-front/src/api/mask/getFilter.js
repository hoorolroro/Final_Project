import React from "react";
import axios from "axios";

export const getFilter = async ({
  maskKF,
  maskSize,
  maskShape,
  setMaskList,
}) => {
  if (maskKF != "") {
    if (maskSize != "") {
      if (maskShape != "") {
        const response = await axios.get(
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}&size=${maskSize}&shape=${maskShape}`
        );
        console.log(
          "URL 확인",
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}&size=${maskSize}&shape=${maskShape}`
        );
        setMaskList(response.data);
      } else {
        const response = await axios.get(
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}&size=${maskSize}`
        );
        console.log(
          "URL 확인",
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}&size=${maskSize}`
        );
        setMaskList(response.data);
      }
    } else {
      if (maskShape != "") {
        const response = await axios.get(
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}`
        );
        console.log(
          "URL 확인",
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}`
        );
        setMaskList(response.data);
      } else {
        const response = await axios.get(
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}&shape=${maskShape}`
        );
        console.log(
          "URL 확인",
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}&shape=${maskShape}`
        );
      }
    }
  }

  // const response = await axios.get(
  //   `http://localhost:8080/mask/filter?blockingindex=${maskKF}&size=${maskSize}&shape=${maskShape}`
  // );

  // console.log(response);
  // setMaskList(response.data);
};
