import React from "react";
import axios from "axios";

export const getWishlist = async (memberId, setWishList) => {
  if (memberId) {
    const response = axios
      .get(
        // `http://localhost:8080/wishlist?memberId=${memberId}&page=1&size=100`
        `http://34.64.239.97:8080/wishlist?memberId=${memberId}&page=1&size=100`
      )
      .then((response) => setWishList(response.data));
  }
};
