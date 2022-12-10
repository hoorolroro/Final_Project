import React, { useEffect, useState } from "react";
import styleed from "styled-components";

const FixedRecentView = styleed.div`
  position: fixed; 
  width : 70px;
  top: 40%; 
  right: 30px;
  z-index: 1;
  padding: 10px; 
  // background: #B1F0E1; 
  border-radius: 6px;
  // color: #fff;
  border: 2px solid;
  text-align: left;
  font-size:13px;
  // text-overflow: ellipsis;
  // overflow: auto;
`;

function RecentView() {
  const maskId = "마스크A";
  return (
    <div>
      <FixedRecentView>
        최근 본 상품
        <hr></hr>
        <a href={`/aboutMask/${maskId}/Masinsa`}>
          <li> 마스크A</li>
        </a>
        <a href={`/aboutMask/${maskId}/Masinsa`}>
          <li> 마스크B</li>
        </a>
        <a href={`/aboutMask/${maskId}/Masinsa`}>
          <li> 마스크C</li>
        </a>
      </FixedRecentView>
    </div>
  );
}
export default RecentView;
