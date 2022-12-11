import React from "react";
import { useParams } from "react-router-dom";

function CurrentLocation() {
  const { blockingindex, shape } = useParams();

  return (
    <div>
      홈 → {blockingindex} → {shape}
    </div>
  );
}

export default CurrentLocation;
