import React from "react";
import axios from "axios";

export const getImage = async ({ maskId }) => {
  const response = axios.get("/mask/image", {
    maskId: { maskId },
  });
};
