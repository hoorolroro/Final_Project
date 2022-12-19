import React, { useEffect, useState } from "react";
import { postMemberReview } from "../../api/review/postMemberReview";
import {
  ReviewBox,
  ReviewChangeBtn,
  ReviewInput,
} from "../../styles/AboutPageStyle";

function ReviewWrite({ maskId, memberId, setMemberReview }) {
  const [isCheck, setCheck] = useState(false);

  const [inputValue, setInputValue] = useState();

  //   const [keyword, setKeyWord] = useState("");
  const [content, setContent] = useState();

  const onChange = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };

  const onAdd = () => {
    setContent(inputValue);
    console.log(inputValue);
    // setMemberReview(content);
    // console.log("add");
  };

  // 멤버
  //   회원 가입 없이 온전히 기능 테스트 하기 어려움
  console.log(memberId);

  useEffect(() => {
    postMemberReview({ memberId, maskId, content, setMemberReview });
  }, [content]);

  return (
    <div>
      <button
        onClick={() => {
          setCheck((e) => !e);
          //   console.log("리뷰쓰기");
        }}
      >
        ⬇ 리뷰 작성하기
      </button>

      {isCheck && (
        <>
          <ReviewBox>
            <ReviewInput
              placeholder="사용 후기를 적어주세요."
              onChange={onChange}
            />
            <div>
              <ReviewChangeBtn
                onClick={onAdd}
                setMemberReview={setMemberReview}
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
