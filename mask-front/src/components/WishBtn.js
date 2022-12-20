import React, { useEffect } from "react";
import { postWishlist } from "../api/wishlist/postWishlist";
// import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function WishBtn({ maskId, memberId }) {
  // console.log(memberId);
  // console.log(maskId);

  const [isClick, setIsClick] = React.useState(false);
  // console.log("isClick", isClick);

  React.useEffect(() => {
    if (isClick) {
      if (memberId != undefined) {
        // 찜버튼 클릭 확인
        // console.log("isClick - true", isClick);
        // 찜버튼 클릭된 마스크 id
        // console.log("isClick - true", maskId);

        // 찜post
        postWishlist({ memberId, maskId });
      }
    }
  });

  return (
    <div
      style={{
        width: "auto",
        height: "auto",
      }}
    >
      <Checkbox
        style={{
          width: "auto",
          height: "95%",
        }}
        {...label}
        // 체크 전 하트모양
        icon={<FavoriteBorder />}
        // 체크되었을때 모양
        checkedIcon={<Favorite />}
        // 색조정
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
        // 클릭 event
        onClick={() => {
          setIsClick(!isClick);
        }}
      ></Checkbox>
    </div>
  );
}
export default WishBtn;
