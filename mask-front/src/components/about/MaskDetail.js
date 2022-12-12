import React from "react";
import styled from "styled-components";
import MoreBtn from "./MoreBtn";

const MaskDetailSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 5px;
  margin: 5px;
  border: 2px solid red;
`;

function MaskDetail({ mask }) {
  return (
    <div>
      <MaskDetailSection>
        마스크상세이미지
        <MoreBtn />
      </MaskDetailSection>
    </div>
  );
}

export default MaskDetail;
