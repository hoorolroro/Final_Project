import React from "react";
import axios from "axios";

//http://localhost:8080/analysis_info?maskId=1
export const getAnalysis = async ({ maskId, setAnalysisInfo }) => {
  const response = axios.get(
    // `http://localhost:8080/analysis_info?maskId=${maskId}`
    "http://localhost:8080/analysis_info?maskId=1"
  );

  setAnalysisInfo(response.data);
};
