import React from "react";
import axios from "axios";

export const getDashboard = async ({ date }) => {
  const response = axios.get("/dashboard", {
    date: { date },
  });
};
