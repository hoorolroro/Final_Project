//정렬기준변경
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SelectBox_active, SortSection2 } from "../../styles/ListPageStyle";
import { SelectBox } from "../../styles/ListPageStyle";

function SortChange2({
  sortOrder,
  sortCol,
  setSortCol,
  setSortOrder,
  isChange,
  setIsChange,
}) {
  // 필터걸린 마스크 sortChange : 완성되면 api 넣기

  // console.log("sortCol : ", sortCol, ", sortOrder : ", sortOrder);

  // console.log("sortChange - isChange : ", isChange);

  return (
    <div>
      <SortSection2>
        {/* 낮은가격순 */}
        {sortCol === "price" ? (
          isChange === false ? (
            <SelectBox_active
              onClick={() => {
                setSortCol("price");
                setSortOrder("asc");
                setIsChange(false);
              }}
            >
              낮은가격순
            </SelectBox_active>
          ) : (
            <SelectBox
              onClick={() => {
                setSortCol("price");
                setSortOrder("asc");
                setIsChange(false);
              }}
            >
              낮은가격순
            </SelectBox>
          )
        ) : (
          <SelectBox
            onClick={() => {
              setSortCol("price");
              setSortOrder("asc");
              setIsChange(false);
            }}
          >
            낮은가격순
          </SelectBox>
        )}
        {/* 평점순 */}
        {sortCol === "avg_score" ? (
          isChange === false ? (
            <SelectBox_active
              onClick={() => {
                setSortCol("avg_score");
                setSortOrder("desc");
                setIsChange(false);
              }}
            >
              평점순
            </SelectBox_active>
          ) : (
            <SelectBox
              onClick={() => {
                setSortCol("avg_score");
                setSortOrder("desc");
                setIsChange(false);
              }}
            >
              평점순
            </SelectBox>
          )
        ) : (
          <SelectBox
            onClick={() => {
              setSortCol("avg_score");
              setSortOrder("desc");
              setIsChange(false);
            }}
          >
            평점순
          </SelectBox>
        )}
        {/* 클릭많은 순 */}
        {sortCol === "click_num" ? (
          isChange === false ? (
            <SelectBox_active
              onClick={() => {
                setSortCol("click_num");
                setSortOrder("desc");
                setIsChange(false);
              }}
            >
              클릭많은순
            </SelectBox_active>
          ) : (
            <SelectBox
              onClick={() => {
                setSortCol("click_num");
                setSortOrder("desc");
                setIsChange(false);
              }}
            >
              클릭많은순
            </SelectBox>
          )
        ) : (
          <SelectBox
            onClick={() => {
              setSortCol("click_num");
              setSortOrder("desc");
              setIsChange(false);
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
