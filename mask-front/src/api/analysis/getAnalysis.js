import React from "react";
import axios from "axios";

//http://localhost:8080/analysis_info?maskId=1
export const getAnalysis = async ({ maskId, setAnalysisInfo }) => {
  const response = await axios.get(
    `http://localhost:8080/analysisinfo?maskId=${maskId}`
  );

  // console.log("get", response.data.result);
  setAnalysisInfo(response.data.result);
};
