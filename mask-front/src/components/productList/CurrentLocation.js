import React from "react";
import { useParams } from "react-router-dom";

function CurrentLocation({ mask }) {
  // 수정 필요 !! ListPage
  const { blockingindex, shape } = useParams();

  console.log("CurrentLocation : ", { mask });

  return (
    <div>
      {mask ? (
        <div>
          홈 → kf{mask.kf} → {mask.shape}
        </div>
      ) : (
        <div>홈 → (수정하기수정수정)</div>
      )}
    </div>
  );
}

export default CurrentLocation;
