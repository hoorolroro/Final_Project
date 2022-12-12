import React from "react";
import axios from "axios";

export const getTop3 = async ({ setTop3 }) => {
  const response = await axios.get("http://localhost:8080/masklist/top3");

  setTop3(response.data);
};
