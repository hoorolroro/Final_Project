import React from "react";
import Access from "../components/dashboard/Access";
import LoginPeople from "../components/dashboard/LoginPeople";
import Other from "../components/dashboard/Other";

function DashBoardPage() {
  return (
    <div>
      <h1>Masinsa DashBoard</h1>
      <hr></hr>
      {/* 접속자수 */}
      <Access />
      {/* 로그인사람수 */}
      <LoginPeople />
      {/* 다른통계 */}
      <Other />
    </div>
  );
}

export default DashBoardPage;
