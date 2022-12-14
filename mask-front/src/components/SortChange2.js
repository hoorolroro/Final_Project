//정렬기준변경
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SelectBox_active, SortSection2 } from "../styles/ListPageStyle";
import { SelectBox } from "../styles/ListPageStyle";

function SortChange2() {
  // 필터걸린 마스크 sortChange : 완성되면 api 넣기

  const [sortCol, setSortCol] = useState("mask_id");
  const [sortOrder, setSortOrder] = useState("asc");

  // console.log("sortCol", sortCol);
  // console.log("sortOrder", sortOrder);

  return (
    <div>
      <SortSection2>
        {sortCol === "price" ? (
          <SelectBox_active onClick={() => setSortCol("price")}>
            낮은가격순
          </SelectBox_active>
        ) : (
          <SelectBox onClick={() => setSortCol("price")}>낮은가격순</SelectBox>
        )}
        {sortCol === "avg_score" ? (
          <SelectBox_active
            onClick={() => {
              setSortCol("avg_score");
              setSortOrder("desc");
            }}
          >
            평점순
          </SelectBox_active>
        ) : (
          <SelectBox
            onClick={() => {
              setSortCol("avg_score");
              setSortOrder("desc");
            }}
          >
            평점순
          </SelectBox>
        )}
        {sortCol === "click_num" ? (
          <SelectBox_active
            onClick={() => {
              setSortCol("click_num");
              setSortOrder("desc");
            }}
          >
            클릭많은순
          </SelectBox_active>
        ) : (
          <SelectBox
            onClick={() => {
              setSortCol("click_num");
              setSortOrder("desc");
            }}
          >
            클릭많은순
          </SelectBox>
        )}
      </SortSection2>
    </div>
  );
}

export default SortChange2;
