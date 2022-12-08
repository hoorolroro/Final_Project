import React from "react";
import DayAccess from "./DayAccess";
import TimeAccess from "./TimeAccess";

function Access() {
  return (
    <div>
      <div>
        <h3>오늘의 접속자수</h3>
        <DayAccess />
      </div>
      <div>
        <h3>시간별 접속자수</h3>
        <TimeAccess />
      </div>
    </div>
  );
}

export default Access;
