import React from "react";
import Access from "../components/dashboard/Access";
import LoginPeople from "../components/dashboard/LoginPeople";
import Other from "../components/dashboard/Other";

function DashBoardPage() {
  return (
    <div>
      <Access />
      <LoginPeople />
      <Other />
    </div>
  );
}

export default DashBoardPage;
