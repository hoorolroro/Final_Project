import React from "react";
import axios from "axios";

export const postDashboard = async ({ date, connectionCount, loginCount }) => {
  const response = axios.post("/dashboard", {
    date: { date },
    connectionCount: { connectionCount },
    loginCount: { loginCount },
  });
};
