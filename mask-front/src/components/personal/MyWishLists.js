import React from "react";
import WishBtn from "../WishBtn";

function MyWishLists() {
  return (
    <div>
      나의 찜목록
      <div>
        {/* "/aboutMask/:maskId/Masinsa" */}
        <ul>
          <a href="/aboutMask/마스크A/Masinsa">마스크A</a>
          <WishBtn />
        </ul>
        <ul>
          <a href="/aboutMask/마스크B/Masinsa">마스크B</a>
          <WishBtn />
        </ul>
      </div>
    </div>
  );
}

export default MyWishLists;
