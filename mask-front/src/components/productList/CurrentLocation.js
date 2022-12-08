import React from "react";
import { useParams } from "react-router-dom";

function CurrentLocation() {
  const { blockingindex } = useParams();
  return (
    <div>
      <p>"홈 → {blockingindex} → 새부리형"</p>
    </div>
  );
}

export default CurrentLocation;
