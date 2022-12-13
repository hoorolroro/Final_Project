import React from "react";
import axios from "axios";

export const getImage = async ({ maskId, setImages }) => {
  const response = await axios.get(
    // `http://localhost:8080/mask/image?maskId=${maskId}`
    "http://localhost:8080/mask/image?maskId=1"
  );

  setImages(response.data);
};
