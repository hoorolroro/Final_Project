import React from "react";
import CurrentLocation from "./CurrentLocation";
import ShapeLists from "./ShapeLists";
import SizeLists from "./SizeLists";

function FilterBox() {
  return (
    <div>
      <CurrentLocation />
      <ShapeLists />
      <SizeLists />
    </div>
  );
}

export default FilterBox;
