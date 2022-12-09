import React from "react";
import { Link } from "react-router-dom";

function MyPageBtn() {
  return (
    <div>
      <Link to="/:memberId/MyPage/Masinsa">
        <button>Go MyPage</button>
      </Link>
    </div>
  );
}
export default MyPageBtn;
