import React from "react";
import styled from "styled-components";
import {
  SearchFieldset,
  SearchInput,
  SearchBtn,
} from "../../styles/MainPageStyle";

function SearchBox() {
  return (
    <div>
      <form>
        <SearchFieldset>
          {/* <legend>Search</legend> */}
          <SearchInput
            type="text"
            id="KeyWord"
            placeholder="ex. 중형, 대형, 웰킵스, 새부리"
            autoFocus
          ></SearchInput>
          {/* 버튼 누르면 값 전송 */}
          <SearchBtn>🔍</SearchBtn>
        </SearchFieldset>
      </form>
    </div>
  );
}

export default SearchBox;
