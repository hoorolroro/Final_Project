import React from "react";
import { useParams } from "react-router-dom";

function HeaderFilter() {
  return (
    <div>
      {/* "/MaskList/Masinsa/:blockingindex" */}
      <a href="/MaskList/Masinsa/KF94">
        <li>KF94</li>
      </a>
      <a href="/MaskList/Masinsa/KF80">
        <li>KF80</li>
      </a>
      <a href="/MaskList/Masinsa/KFAD">
        <li>KFAD</li>
      </a>
    </div>
  );
}

export default HeaderFilter;
