import React from "react";
import axios from "axios";

export const getSort = async ({ standard }) => {
  const response = axios.get("/mask/sort", {
    standard: { standard },
  });
};
