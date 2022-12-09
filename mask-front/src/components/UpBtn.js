import React from "react";
import styleed from "styled-components";
const FixedUpBtn = styleed.button`
  position: fixed; 
  bottom : 30px; 
  right: 30px;
  z-index: 1;
  padding: 10px; 
  background: gray; 
  border-radius:80%;
  color: #fff;
  border: 1px solid;
  text-align: left;
`;

function UpBtn() {
  return (
    <div>
      <FixedUpBtn>Scroll UP</FixedUpBtn>
    </div>
  );
}

export default UpBtn;
