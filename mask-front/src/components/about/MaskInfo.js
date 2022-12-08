import React from "react";
import Thumbnail from "./Thumbnail";
import BuyBtn from "./BuyBtn";
import WishBtn from "../WishBtn";

function MaskInfo({ maskId }) {
  return (
    <div>
      <h3> {maskId} 설명 페이지 </h3>
      {/* 썸네일사진 */}
      <Thumbnail />
      <div>
        <li>이름 : {maskId}</li>
        <li>가격 : 5000원</li>
        <li>옵션 : 대/중/소</li>
        {/* 찜버튼 */}
        <WishBtn />
        {/* 구매링크버튼 */}
        <BuyBtn />
      </div>
    </div>
  );
}

export default MaskInfo;
