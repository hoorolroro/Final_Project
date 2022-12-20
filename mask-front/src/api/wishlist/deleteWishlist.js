import React from "react";
import axios from "axios";

export const deleteWishlist = async ({ memberId, maskId }) => {
  const response = axios.delete("/wishlist", {
    memberId: memberId,
    maskId: maskId,
  });
};
