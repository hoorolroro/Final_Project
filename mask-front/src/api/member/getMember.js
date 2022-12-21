import axios from "axios";
import React from "react";

export const getMember = async ({ memberId, setMember }) => {
  const response = await axios.get(
    // `http://localhost:8080/member?memberId=${memberId}`
    `http://34.64.239.97:8080/member?memberId=${memberId}`
    // "http://localhost:8080/member?memberId=2"
  );
  setMember(response.data);
};
