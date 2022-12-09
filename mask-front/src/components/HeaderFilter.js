import React from "react";

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
      <a href="/MaskList/Masinsa/KF-AD">
        <li>KF-AD</li>
      </a>
    </div>
  );
}

export default HeaderFilter;
