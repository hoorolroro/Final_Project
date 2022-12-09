import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BlockingBtn } from "../styles/HeaderStyle";

function HeaderFilter() {
  return (
    <div>
      {/* "/MaskList/Masinsa/:blockingindex" */}
      <a href="/MaskList/Masinsa/KF94">
        <BlockingBtn>KF94</BlockingBtn>
      </a>
      <a href="/MaskList/Masinsa/KF80">
        <BlockingBtn>KF80</BlockingBtn>
      </a>
      <a href="/MaskList/Masinsa/KF-AD">
        <BlockingBtn>KF-AD</BlockingBtn>
      </a>
    </div>
  );
}

export default HeaderFilter;
