import React from "react";
import sidenavbottom from "./sidenavbottom.css";
import bottomimg from "./bottomimg.svg";

function SidenavBottom() {
  return (
    <div className="sidenavbottom">
      <div style={{ margin: "15px" }}>
        <img src={bottomimg} />
      </div>
      <div style={{ margin: "13px" }}>
        <div style={{ fontSize: "10px" }}>Available Credits</div>
        <div>222.10</div>
      </div>
    </div>
  );
}

export default SidenavBottom;
