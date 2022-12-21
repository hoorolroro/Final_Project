import React from "react";
import axios from "axios";

export const getImage = async ({ maskId, setImages }) => {
  const response = await axios.get(
    // `http://localhost:8080/mask/image?maskId=${maskId}`
    `http://34.64.239.97:8080/mask/image?maskId=${maskId}`
  );

  // console.log(response.data);
  setImages(response.data);
};
