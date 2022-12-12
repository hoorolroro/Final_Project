import React from "react";
import Thumbnail from "./Thumbnail";
import BuyBtn from "./BuyBtn";
import WishBtn from "../WishBtn";
import SlidePhoto from "./SlidePhoto";

function MaskInfo({ mask, maskId }) {
  console.log({ mask });

  // mask 값들을 빼내서 사용하기
  return (
    <div>
      <h3> 설명 페이지 </h3>
      {/* 썸네일사진 */}
      <Thumbnail maskId={maskId} />
      <SlidePhoto />
      <div>
        <li>이름 : </li>
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
