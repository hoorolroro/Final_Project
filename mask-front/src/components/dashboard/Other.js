import React from "react";

function Other() {
  const productCount = 20;
  const memberReviewCount = 11;
  const clickCount = 56;
  return (
    <div>
      <li>등록상품수 : {productCount}</li>
      <li>회원리뷰수 : {memberReviewCount}</li>
      <li>상품클릭수합계 : {clickCount}</li>
    </div>
  );
}

export default Other;
