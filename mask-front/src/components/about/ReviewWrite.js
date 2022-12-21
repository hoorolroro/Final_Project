import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { postMemberReview } from "../../api/review/postMemberReview";
import {
  ReviewBox,
  ReviewChangeBtn,
  ReviewInput,
} from "../../styles/AboutPageStyle";

function ReviewWrite({ maskId, memberId, reviewType }) {
  const [isCheck, setCheck] = useState(false);

  const [inputValue, setInputValue] = useState();

  // const [content, setContent] = useState();
  const [content, setContent] = useState("");

  const onChange = (e) => {
    setContent(e.target.value);
    // console.log(inputValue);
  };

  const onPost = (e) => {
    postMemberReview({
      memberId,
      maskId,
      content,
      reviewType,
    });
    alert("회원님의 리뷰 등록이 완료되었습니다.");
    window.location.reload();
  };

  // 멤버: 회원 가입 없이 온전히 기능 테스트 하기 어려움
  // -> memberId 일단 정한 뒤 작업

  return (
    <div>
      {memberId > 0 ? (
        <div
          style={{
            width: "925px",
            height: "25px",
            padding: "5px 3px",
            // border: "1px solid red",
          }}
        >
          <button
            id="writeReviewBtn"
            onClick={() => {
              setCheck((e) => !e);
              //   console.log("리뷰쓰기");
            }}
            style={{
              // width: "300px",
              background: "none",
              border: "1px solid #D9D9D9",
              textAlignfloat: "right",
              float: "right",
              boxShadow: "0px 1px 2px #D9D9D9",
              cursor: "pointer",
              borderRadius: "3px",
            }}
            onMouseOver={() =>
              (document.getElementById("writeReviewBtn").style.boxShadow =
                "none")
            }
            onMouseOut={() =>
              (document.getElementById("writeReviewBtn").style.boxShadow =
                "1px 1px 2px #D9D9D9")
            }
          >
            나도 리뷰 작성하기
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            alert("죄송합니다. MASINSA 로그인 후, 이용가능 한 서비스입니다.");
          }}
        >
          ⬇ 리뷰 작성
        </button>
      )}

      {isCheck && (
        <>
          <ReviewBox>
            <ReviewInput
              placeholder="사용 후기를 적어주세요."
              onChange={onChange}
              autoFocus
              style={{
                border: "1px solid green",
                borderRadius: "5px",
                textAlign: "top",
              }}
            />
            <div>
              <ReviewChangeBtn
                onClick={() => {
                  onPost();
                }}
                style={{
                  background: "none",
                  border: "1px solid #D9D9D9",
                  boxShadow: "0px 1px 2px #D9D9D9",
                  cursor: "pointer",
                  borderRadius: "3px",
                }}
                onMouseOver={() =>
                  (document.getElementById("writeReviewBtn").style.boxShadow =
                    "none")
                }
                onMouseOut={() =>
                  (document.getElementById("writeReviewBtn").style.boxShadow =
                    "0px 1px 2px #D9D9D9")
                }
              >
                제출하기
              </ReviewChangeBtn>
            </div>
          </ReviewBox>
        </>
      )}
    </div>
  );
}

export default ReviewWrite;
