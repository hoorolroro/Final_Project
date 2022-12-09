import React from "react";
import axios from "axios";

export const putClick = async ({ maskId }) => {
  const response = axios.put("/mask/click", {
    maskId: { maskId },
  });
};
