import React from "react";
import axios from "axios";

export const deleteMemberReview = async ({ memberId, maskId }) => {
  const response = axios.delete(`http://34.64.239.97:8080/member_review`, {
    memberId: { memberId },
    maskId: { maskId },
  });
};
