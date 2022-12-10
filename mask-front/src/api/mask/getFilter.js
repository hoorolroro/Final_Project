import React from "react";
import axios from "axios";

export const getFilter = async ({ kf, size, shape }) => {
  const response = await axios.get("/mask/filter", {
    kf: { kf },
    size: { size },
    shape: { shape },
  });
};
