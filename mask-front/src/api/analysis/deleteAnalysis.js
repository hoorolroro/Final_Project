import React from "react";
import axios from "axios";

export const deleteAnalysis = async ({ maskId }) => {
  const response = await axios.delete("/analysis_info", {
    maskId: { maskId },
  });
};
