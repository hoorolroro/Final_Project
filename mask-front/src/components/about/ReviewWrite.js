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

  const [memberReview, setMemberReview] = useState([]);

  const onChange = (e) => {
    setInputValue(e.target.value);
    // setContent(e.target.value);
    // console.log(inputValue);
  };

  // setContent가 안먹음
  // 혹시 useState()와 useState("") 차이 때문인가?
  // setContent가 클릭을 두번 해야 먹음 ㅋㅋㅋㅋㅋ
  const onAdd = () => {
    setContent(inputValue);
    // console.log(inputValue);
  };

  // 멤버: 회원 가입 없이 온전히 기능 테스트 하기 어려움
  // -> memberId 일단 정한 뒤 작업

  // content가 없는데도 postMemberReview가 실행되어 오류가 남. -> if문으로 해결

  useEffect(() => {
    if (content.length > 0) {
      postMemberReview(
        {
          memberId,
          maskId,
          content,
          reviewType,
          setMemberReview,
        },
        [content]
      );
    }
  });

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
              autoFocus
              // onAdd
              // onAdd={onAdd}
            />
            <div>
              <ReviewChangeBtn
                onClick={() => {
                  onAdd();
                  setMemberReview();
                  console.log("memberId: ", memberId);
                  console.log("maskId: ", maskId);
                  console.log("content: ", content);
                  console.log("reviewType: ", reviewType);
                  console.log("memberReview: ", memberReview);
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
