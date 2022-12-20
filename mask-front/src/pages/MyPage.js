import React, { useEffect, useState } from "react";
import { getWishlist } from "../api/wishlist/getWishlist";
import LoginBtn from "../components/LoginBtn";
import MyWishLists from "../components/personal/MyWishLists";
import { LogoutBtn } from "../styles/HeaderStyle";
import { Main } from "../styles/OtherStyles";

function MyPage() {
  // 로그인시, 로컬에 저장된 userInfo
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // console.log("유저", userInfo);

  const [nickname, setNickName] = useState("고객");
  const [memberId, setMemberId] = useState();
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    if (userInfo) {
      setNickName(userInfo.nickname);
      setMemberId(userInfo.id);
    }
  }, []);

  useEffect(() => {
    getWishlist(memberId, setWishList);
  }, [memberId]);

  // console.log(wishList);

  return (
    <div>
      <Main>
        <div style={{ margin: "30px 0px" }}>
          <h3>"안녕하세요"</h3>
          <h2>
            <span style={{ fontSize: "30px", color: "#05735F" }}>
              {nickname}
            </span>{" "}
            님 🙂
          </h2>
        </div>
        {/* 찜목록 section*/}
        <div style={{ padding: "20px 50px" }}>
          {/* 찜목록 box */}
          <div
            style={{
              height: "350px",
              borderRadius: "15px",
              border: "2px solid #05735F",
              borderStyle: "dashed",
              position: "relative",
              boxShadow: "0px 1px 3px #999",
            }}
          >
            {/* My WishList (제목) 보여주는 부분 */}
            <div
              style={{
                position: "absolute",
                width: "96.5%",
                height: "13%",
                borderRadius: "15px 15px 0px 0px",
                // border: "1px solid red",
                background: "#05735F",
                top: "-1%",
                left: "-0.5%",
                textAlign: "left",
                color: "white",
                padding: "20px 20px 0px",
                fontSize: "20px",
                fontWeight: "700",
                boxShadow: "0px 1px 3px #999",
              }}
            >
              <span style={{ color: "red" }}>❤</span> My WishList{" "}
              <span style={{ color: "red" }}>❤</span>
            </div>
            {/* 찜 목록 부분 */}
            <div
              style={{
                position: "absolute",
                // border: "1px solid red",
                top: "23%",
                left: "3%",
                right: "3%",
                height: "70%",
                width: "94%",
                overflow: "auto",
              }}
            >
              {wishList.length > 0 ? (
                <>
                  <MyWishLists wishList={wishList} />
                </>
              ) : (
                // 찜목록이 없을 경우
                <div
                  style={{
                    padding: "50px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    찜한 상품이 존재하지 않습니다
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#0ea654",
                      fontWeight: "600",
                    }}
                  >
                    * 믿을 수 있는 MASINSA의 마스크들을 만나러 가볼까요? *
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    👉{" "}
                    <a
                      href="/"
                      style={{
                        fontSize: "10px",
                      }}
                    >
                      MainPage로 돌아가기
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default MyPage;
