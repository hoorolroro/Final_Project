import React, { useEffect, useState } from "react";
import { deleteWishlist } from "../../api/wishlist/deleteWishlist";
import WishBtn from "../WishBtn";

function MyWishLists({ wishList, memberId }) {
  // console.log(wishList);

  const [isClickDelete, setIsClickDelete] = useState(false);
  const [maskId, setMaskId] = useState(0);

  const deleteWish = (maskId) => {
    setIsClickDelete(true);
    setMaskId(maskId);
    console.log(maskId);
  };

  console.log(memberId);

  useEffect(() => {
    if (isClickDelete) {
      console.log("얍");
      deleteWishlist(memberId, maskId);
    }
  }, [maskId]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: "20px",
          columnGap: "10px",
        }}
      >
        {/* "/aboutMask/:maskId/Masinsa" */}
        {/* map return 할때 {return X}  or () 잘 확인하자! */}
        {wishList.map((wish) => (
          <div key={wish.id}>
            <div
              style={{
                position: "relative",
                height: "230px",
                width: "240px",
                // border: "1px solid red",
              }}
            >
              <a
                href={`http://localhost:3000/aboutMask/${wish.maskId}/Masinsa`}
              >
                {/* wish 마스크 이미지 */}
                <div
                  style={{
                    position: "relative",
                    height: "230px",
                    width: "240px",
                    backgroundImage: `url(${wish.thumbnail})`,
                    backgroundSize: "cover",
                    border: "1px solid #9A9A9A",
                    borderRadius: "15px",
                  }}
                >
                  {/* wish 마스크 정보칸 */}
                  <div
                    style={{
                      position: "absolute",
                      width: "101%",
                      height: "35%",
                      background: "#2D2D2D",
                      bottom: "-1%",
                      border: "0px",
                      borderRadius: "0px 0px 15px 15px",
                      color: "white",
                      opacity: "90%",
                      overflow: "hidden",
                    }}
                  >
                    {/* 마스크이름 */}
                    <p
                      style={{
                        fontSize: "13px",
                        margin: "8px 5px 5px 10px",
                        fontWeight: "700",
                        textAlign: "left",
                      }}
                    >
                      {wish.maskName}
                    </p>
                    {/* 마스크 가격 */}
                    <p
                      style={{
                        fontSize: "13px",
                        paddingLeft: "10px",
                        margin: "0px",
                        color: "#FF7D04",
                        fontWeight: "700",
                        textAlign: "left",
                      }}
                    >
                      {wish.price} 원
                    </p>
                  </div>
                </div>
              </a>
              {/* 찜목록삭제버튼 */}
              <button
                id={`${wish.maskId}delete`}
                style={{
                  position: "absolute",
                  width: "25px",
                  height: "25px",
                  border: "0px",
                  borderRadius: "5px",
                  background: "#F5F5F5",
                  top: "3%",
                  right: "3%",
                  fontSize: "15px",
                  cursor: "pointer",
                  boxShadow: "1px 2px 3px #9A9A9A",
                  color: "orange",
                  zIndex: "1",
                }}
                onClick={() => {
                  deleteWish(wish.maskId);
                }}
                onMouseOver={() => {
                  document.getElementById(
                    `${wish.maskId}delete`
                  ).style.boxShadow = "1px 2px 3px orange";
                }}
                onMouseOut={() => {
                  document.getElementById(
                    `${wish.maskId}delete`
                  ).style.boxShadow = "1px 2px 3px #9A9A9A";
                }}
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWishLists;
