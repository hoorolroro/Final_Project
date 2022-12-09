import React from "react";
import axios from "axios";

export const putSoldout = async ({ maskId, soldout }) => {
  const response = axios.put("/mask/soldout", {
    maskId: { maskId },
    soldout: { soldout },
  });
};
