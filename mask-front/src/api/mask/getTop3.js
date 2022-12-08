import React from "react";

export const getTop3 = async ({ setData }) => {
  const response = axios.get("http://localhost:8080/mask/top3");

  setData(response.data);
};
