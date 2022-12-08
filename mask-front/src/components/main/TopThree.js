// 인기 순위 3위
import React from "react";
import { Link } from "react-router-dom";
import RecentView from "../RecentView";

function TopThree() {
  return (
    <div>
      <h1>TOP3</h1>
      <div>
        {/* "/aboutMask/:maskId/Masinsa" */}
        <a href="/aboutMask/1st/Masinsa">
          <li>1st</li>
        </a>
        <a href="/aboutMask/2nd/Masinsa">
          <li>2nd</li>
        </a>
        <a href="/aboutMask/3rd/Masinsa">
          <li>3rd</li>
        </a>
        <Link to="/Introduce/Masinsa">마신사만의 기준이 궁금하다면?</Link>
      </div>
    </div>
  );
}

export default TopThree;
