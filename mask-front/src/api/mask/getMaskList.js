import axios from "axios";
import React from "react";

export const getMaskList = async ({ setMaskList, startNum, endNum }) => {
  const response = await axios.get(
    // `http://localhost:8080/masklist?startNum=${startNum}&endNum=${endNum}`
    "http://localhost:8080/masklist?startNum=1&endNum=6"
  );

  setMaskList(response.data);
};
