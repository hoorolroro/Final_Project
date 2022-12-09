import React from "react";
import axios from "axios";

export const deleteMask = async ({ maskId }) => {
  const response = await axios.delete("/mask", {
    maskId: { maskId },
  });
};
