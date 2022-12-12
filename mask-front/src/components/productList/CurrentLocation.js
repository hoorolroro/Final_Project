import React from "react";
import { useParams } from "react-router-dom";

function CurrentLocation({ mask }) {
  const { blockingindex, shape } = useParams();

  console.log("mask", { mask });

  return (
    <div>
      {mask ? (
        <div>
          홈 → {mask.kf} → {mask.shape}
        </div>
      ) : (
        <div>홈 →</div>
      )}
    </div>
  );
}

export default CurrentLocation;
