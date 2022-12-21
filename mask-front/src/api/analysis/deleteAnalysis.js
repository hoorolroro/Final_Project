import React from "react";
import axios from "axios";

export const deleteAnalysis = async ({ maskId }) => {
  const response = await axios.delete(`http://34.64.239.97:8080/analysisinfo`, {
    maskId: { maskId },
  });
};
