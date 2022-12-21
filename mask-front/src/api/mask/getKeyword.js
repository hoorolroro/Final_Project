import React from "react";
import axios from "axios";

export const getKeyword = async ({ keyword }) => {
  const response = await axios.get(`http://34.64.239.97:8080/mask/keyword`, {
    keyword: { keyword },
  });
};
