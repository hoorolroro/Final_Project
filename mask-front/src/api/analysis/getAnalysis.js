import React from "react";
import axios from "axios";

export const getAnalysis = async ({ maskId }) => {
  const response = axios.get("/analysis_info", {
    maskId: { maskId },
  });
};
