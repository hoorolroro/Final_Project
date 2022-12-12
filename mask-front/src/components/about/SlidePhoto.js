import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImage } from "../../api/getImage";

function SlidePhoto({ maskId }) {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getImage({ maskId, setImage });
  }, []);

  console.log(image);

  return <div></div>;
}

export default SlidePhoto;
