import React from "react";
import axios from "axios";

export const getWishlist = async ({ memberId }) => {
  const response = axios.get("/wishlist", {
    memberId: memberId,
  });
};
