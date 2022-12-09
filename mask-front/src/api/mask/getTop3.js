import React from "react";
import axios from "axios";

export const getTop3 = async ({ setData }) => {
  const response = axios.get("/mask/top3");

  setData(response.data);
};
