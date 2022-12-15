import React, { useState } from "react";
import styled from "styled-components";
import {
  SearchFieldset,
  SearchInput,
  SearchBtn,
} from "../../styles/MainPageStyle";

function SearchBox({ keyword, setKeyWord }) {
  // 엔터키 눌렸을 때도 keyword에 값 전달 되도록 onKeyPress 설정
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  // 키워드 설정
  // const [keyword, setKeyWord] = useState(null);
  // console.log("searchBox :", keyword);

  const [inputValue, setInputValue] = useState();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  // console.log("searchBox -input :", inputValue);

  const onAdd = () => {
    setKeyWord(inputValue);
  };

  // console.log("searchBox -keyword :", keyword);

  return (
    <div>
      <form>
        <SearchFieldset>
          {/* <legend>Search</legend> */}
          <SearchInput
            type="search"
            id="SearchBox"
            placeholder="검색어를 띄어쓰기로 구분하여 입력 (ex.중형 kf94)"
            autoFocus
            onChange={onChange}
            onKeyPress={onKeyPress}
          ></SearchInput>
          {/* 버튼 누르면 값 전송 */}
          <SearchBtn onClick={onAdd}>🔍</SearchBtn>
        </SearchFieldset>
      </form>
    </div>
  );
}

export default SearchBox;
