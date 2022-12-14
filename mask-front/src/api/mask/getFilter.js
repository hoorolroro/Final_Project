import React from "react";
import axios from "axios";

export const getFilter = async ({
  maskKF,
  maskSize,
  maskShape,
  setMaskList,
}) => {
  console.log("getFilter", maskKF);
  console.log("getFilter", maskSize);
  console.log("getFilter", maskShape);

  if (maskKF != "") {
    if (maskSize != "") {
      if (maskShape != "") {
        // KF, Size, Shape 모두 존재
        const response = await axios.get(
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}&size=${maskSize}&shape=${maskShape}`
        );
        setMaskList(response.data);
      } else {
        //KF, Size 존재 (Shape 없음)
        const response = await axios.get(
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}&size=${maskSize}`
        );
        setMaskList(response.data);
      }
    } else {
      if (maskShape != "") {
        // KF, Shape 존재 ( Size 없음 )
        const response = await axios.get(
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}&shape=${maskShape}`
        );
        setMaskList(response.data);
      } else {
        // KF만 존재 ( Size, Shape 없음)
        const response = await axios.get(
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}`
        );
        console.log(
          `http://localhost:8080/mask/filter?blockingIndex=${maskKF}`
        );
        setMaskList(response.data);
      }
    }
  }

  // const response = await axios.get(
  //   `http://localhost:8080/mask/filter?blockingindex=${maskKF}&size=${maskSize}&shape=${maskShape}`
  // );

  // console.log(response);
  // setMaskList(response.data);
};
