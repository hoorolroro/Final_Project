import React from "react";
import axios from "axios";

export const deleteWishlist = async (memberId, maskId) => {
  console.log(memberId, maskId);
  const response = axios.put(
    // `http://localhost:8080/wishlist?memberId=${memberId}&maskId=${maskId}`
    `http://34.64.239.97:8080/wishlist?memberId=${memberId}&maskId=${maskId}`
  );

  // console.log(
  //   `http://localhost:8080/wishlist?memberId=${memberId}&maskId=${maskId}`
  // );
};
