import React, { useEffect, useState } from "react";
import { postMemberReview } from "../../api/review/postMemberReview";
import { ReviewBox, ReviewInput } from "../../styles/AboutPageStyle";

function ReviewWrite({ maskId, memberId, content }) {
  const [isCheck, setCheck] = useState(false);
  useEffect(() => {
    postMemberReview({ memberId, maskId, content });
  }, [content]);

  return (
    <div>
      <button
        onClick={() => {
          setCheck((e) => !e);
          console.log("리뷰쓰기");
        }}
      >
        ⬇ 리뷰 작성하기
      </button>

      {isCheck && (
        <>
          <ReviewBox>
            <ReviewInput />
            <div>
              <button
                onClick={() => {
                  console.log("제출");
                }}
              >
                제출하기
              </button>
            </div>
          </ReviewBox>
        </>
      )}
    </div>
  );
}

export default ReviewWrite;
