//정렬기준변경
import React from "react";
import styled from "styled-components";
import { SortSection2 } from "../styles/ListPageStyle";
import { SelectBox } from "../styles/ListPageStyle";

function SortChange2() {
  return (
    <div>
      <SortSection2>
        <SelectBox>낮은가격순</SelectBox>
        <SelectBox>평점순</SelectBox>
        <SelectBox>클릭많은순</SelectBox>
      </SortSection2>
    </div>
  );
}

export default SortChange2;
