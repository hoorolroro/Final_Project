import React from "react";
import axios from "axios";

export const postWishlist = async ({ memberId, maskId }) => {
  const response = axios.post("/wishlist", {
    memberId: { memberId },
    maskId: { maskId },
  });
};
