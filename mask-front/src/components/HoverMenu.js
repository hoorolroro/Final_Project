import React from "react";
import styled from "styled-components";

// hovering 메뉴

const ListStyle = styled.ul`
  list-style: none;
`;

const Lists = styled.li`
  border: 0px solid;
  padding: 5px 10px;
  margin: 2px;
`;

function HoverMenu() {
  return (
    <div>
      <ListStyle>
        {/* <li>전체보기</li> */}
        <li>새부리형</li>
        <li>입체형</li>
        <li>덴탈</li>
      </ListStyle>
      <li></li>
    </div>
  );
}

export default HoverMenu;
