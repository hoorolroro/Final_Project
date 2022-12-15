import React from "react";
import axios from "axios";

export const getFilterMaskSort = async ({
  sortCol,
  sortOrder,
  page,
  size,
  maskKF,
  maskSize,
  maskShape,
  setMaskList,
}) => {
  // console.log("getFilter", maskKF);
  // console.log("getFilter", maskSize);
  // console.log("getFilter", maskShape);

  // http://localhost:8080/mask/filter/sort?sortCol=avg_score&order=desc&page=1&size=2&filterCol1=shape&filter1=입체형

  if (maskKF != "") {
    if (maskShape != "") {
      if (maskSize != "") {
        if (sortCol != "") {
          // 모든 파라미터가 존재할경우
          const response = await axios.get(
            `http://localhost:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&page=${page}&size=${size}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}&filterCol3=size&filter3=${maskSize}`
          );
          setMaskList(response.data.result);
        } else {
          // 정렬은 존재하지 x 다른 거 모두 존재 (size, shape, KF)
          const response = await axios.get(
            `http://localhost:8080/mask/filter/sort?page=${page}&size=${size}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}&filterCol3=size&filter3=${maskSize}`
          );
          setMaskList(response.data.result);
        }
      } else {
        if (sortCol != "") {
          // size 존재 x 정렬 o ( kf, shape)
          const response = await axios.get(
            `http://localhost:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&page=${page}&size=${size}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}`
          );
          setMaskList(response.data.result);
        } else {
          // size 존재 x 정렬 x ( kf, shape)
          const response = await axios.get(
            `http://localhost:8080/mask/filter/sort?page=${page}&size=${size}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}`
          );
          setMaskList(response.data.result);
        }
      }
    } else {
      if (sortCol != "") {
        // size, shape 존재 x 정렬 o ( kf )
        const response = await axios.get(
          `http://localhost:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&page=${page}&size=${size}&filterCol1=blocking_index&filter1=${maskKF}`
        );
        setMaskList(response.data.result);
      } else {
        // size, shape 존재 x 정렬 x ( kf )
        const response = await axios.get(
          `http://localhost:8080/mask/filter/sort?page=${page}&size=${size}&filterCol1=blocking_index&filter1=${maskKF}`
        );
        setMaskList(response.data.result);
      }
    }
  }
  // const requestParams = {
  //   sortCol: sortCol,
  //   order: sortOrder,
  //   page: page,
  //   size: size,
  //   filterCol1: "blocking_index",
  //   filter1: maskKF,
  //   filterCol2: "shape",
  //   filter2: maskShape,
  //   filterCol3: "size",
  //   filter3: maskSize,
  // };
};
