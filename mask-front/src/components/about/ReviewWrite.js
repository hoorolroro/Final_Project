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

  const onPost = () => {
    postMemberReview({
      memberId,
      maskId,
      content,
      reviewType,
    });
    alert("등록 완료되었습니다.");
    window.location.reload();
  };

  // 멤버: 회원 가입 없이 온전히 기능 테스트 하기 어려움
  // -> memberId 일단 정한 뒤 작업

  return (
    <div>
      {memberId > 0 ? (
        <button
          onClick={() => {
            setCheck((e) => !e);
            //   console.log("리뷰쓰기");
          }}
        >
          ⬇ 리뷰 작성하기
        </button>
      ) : (
        <button
          onClick={() => {
            alert("로그인을 해주시기 바랍니다.");
          }}
        >
          ⬇ 리뷰 작성하기
        </button>
      )}

      {isCheck && (
        <>
          <ReviewBox>
            <ReviewInput
              placeholder="사용 후기를 적어주세요."
              onChange={onChange}
              autoFocus
            />
            <div>
              <ReviewChangeBtn
                onClick={() => {
                  onPost();
                }}
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
