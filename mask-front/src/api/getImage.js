import React from "react";
import axios from "axios";

export const getImage = async ({ maskId, setImage }) => {
  const response = await axios.get(
    // `http://localhost:8080/mask/image?maskId=${maskId}`
    "http://localhost:8080/mask/image?maskId=1"
  );

  setImage(response.data);
};
