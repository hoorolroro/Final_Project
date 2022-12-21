import React, { useEffect, useState } from "react";
import { getWishlist } from "../api/wishlist/getWishlist";
import MyWishLists from "../components/personal/MyWishLists";
import { MyPageArticle, MyPageBox, MyWishMasks } from "../styles/MyPageStyle";
import { Main } from "../styles/OtherStyles";

function MyPage() {
  // 로그인시, 로컬에 저장된 userInfo
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // console.log("유저", userInfo);

  // 닉네임 ! (없으면 고객)
  const [nickname, setNickName] = useState("고객");
  const [memberId, setMemberId] = useState();
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    if (userInfo) {
      if (userInfo.nickname) {
        setNickName(userInfo.nickname);
      }
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
          <MyPageBox>
            {/* My WishList (제목) 보여주는 부분 */}
            <MyPageArticle>
              <span style={{ color: "red" }}>❤</span> My WishList{" "}
              <span style={{ color: "red" }}>❤</span>
            </MyPageArticle>
            {/* 찜 목록 부분 */}
            <MyWishMasks>
              {wishList.length > 0 ? (
                <>
                  <MyWishLists wishList={wishList} memberId={userInfo.id} />
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
            </MyWishMasks>
          </MyPageBox>
        </div>
      </Main>
    </div>
  );
}

export default MyPage;
