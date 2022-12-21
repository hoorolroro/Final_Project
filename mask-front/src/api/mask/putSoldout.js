import React from "react";
import axios from "axios";

export const putSoldout = async ({ maskId, soldout }) => {
  const response = axios.put(`http://34.64.239.97:8080/mask/soldout`, {
    maskId: { maskId },
    soldout: { soldout },
  });
};
