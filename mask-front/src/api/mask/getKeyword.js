import React from "react";
import axios from "axios";

export const getKeyword = async ({ keyword }) => {
  const response = await axios.get("/mask/keyword", {
    keyword: { keyword },
  });
};
