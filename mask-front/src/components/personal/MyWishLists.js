import React from "react";
import { MaskSummaryBox } from "../../styles/MaskListStyles";
import WishBtn from "../WishBtn";

function MyWishLists({ wishList }) {
  console.log(wishList);

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
            <a href={`http://localhost:3000/aboutMask/${wish.maskId}/Masinsa`}>
              <div
                style={{
                  height: "250px",
                  width: "250px",
                  margin: "5px",
                  backgroundImage: `url(${wish.thumbnail})`,
                  backgroundSize: "cover",
                  border: "1px solid #9A9A9A",
                  borderRadius: "15px",
                  position: "relative",
                }}
              >
                {/* wish 마스크 각각의 칸 */}
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
                  }}
                >
                  {/* 마스크이름 */}
                  <p
                    style={{
                      fontSize: "10px",
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
                      fontSize: "10px",
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWishLists;
