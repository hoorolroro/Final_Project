import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MoreBtn from "./MoreBtn";
import { MaskDetailSection } from "../../styles/AboutPageStyle";

function MaskDetail({ images }) {
  // console.log("maskdetail : ", images);
  const [isCheck, setCheck] = useState(false);
  return (
    <div>
      <MaskDetailSection>
        {images ? (
          images.map((image) => (
            <div key={image.id}>
              {/* imageType이 detail 이면 출력 */}
              {image.imageType === "detail" ? (
                <>
                  <img src={image.imageUrl}></img>
                  <MoreBtn isCheck={isCheck} setCheck={setCheck} />
                </>
              ) : (
                <></>
              )}
            </div>
          ))
        ) : (
          <></>
        )}
      </MaskDetailSection>
    </div>
  );
}

export default MaskDetail;
