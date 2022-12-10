import React from "react";
import styled from "styled-components";

// Search 부분
export const SearchSection = styled.section`
  width: auto;
  height: 900px;
  padding: 5px;
  margin: 5px;
  border: 2px solid blue;
`;

// ALL MASINSA MASK 부분
export const SearchArticle = styled.section`
  width: auto;
  height: 30px;
  font-weight: 800;
  font-size: 20px;
  padding: 2px;
  margin: 2px;
  border: 2px solid red;
  overflow: auto;
`;

// SearchBox ( 검색창 Section )
export const SearchBoxSection = styled.section`
  display: flex;
  flex: nowrap;
  width: auto;
  height: 50px;
  padding: 2px;
  margin: 2px;
  border: 2px solid red;
`;

// SearchBox 왼쪽 공백
export const SearchLeftBlank = styled.div`
  width: 30%;
  float: left;
  // border: 1px solid blue;
`;

// 검색창이 들어가는 div ( fieldset(input + btn) )
export const SearchCenter = styled.div`
  padding: 5px;
  width: 40%;
  // border: 1px solid blue;
`;

// SearchBox 오른쪽 공백
export const SearchRightBlank = styled.div`
  width: 30%;
  float: right;
  // border: 1px solid blue;
`;

// Search 기능들을 담은 곳 ( input + btn )
export const SearchFieldset = styled.fieldset`
  display: flex;
  flex: nowrap;
  width: auto;
  height: 30px;
  align-items: center;
  // align-content: center;
  border: 2px solid #9a9a9a;
  border-radius: 2px;
  padding: 1px;
`;

//  검색어를 입력하는 검색창
export const SearchInput = styled.input`
  width: 85%;
  // height: 30px;
  outline: 0;
  border: none;
`;

// 검색 버튼
export const SearchBtn = styled.button`
  position: left;
  width: 15%;
  height: 31px;
  // background: #9a9a9a;
  border: none;
  cursor: pointer;
  overflow: hidden;
`;
