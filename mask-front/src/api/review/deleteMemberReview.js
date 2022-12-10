import React from "react";
import axios from "axios";

export const deleteMemberReview = async ({ memberId, maskId }) => {
  const response = axios.delete("/member_review", {
    memberId: { memberId },
    maskId: { maskId },
  });
};
