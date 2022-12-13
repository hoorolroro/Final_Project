import React from "react";
import styled from "styled-components";
import MoreBtn from "./MoreBtn";
import { MaskDetailSection } from "../../styles/AboutPageStyle";

function MaskDetail({ maskId }) {
  return (
    <div>
      <MaskDetailSection>
        상세이미지보여주기
        <MoreBtn />
      </MaskDetailSection>
    </div>
  );
}

export default MaskDetail;
