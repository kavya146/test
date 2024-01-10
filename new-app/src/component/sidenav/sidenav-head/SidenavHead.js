import React from "react";
import logo from "./icon.svg";
import "./sidenavhead.css";
import downarrow from "./downarrow.svg";
function SidenavHead() {
  return (
    <div className="sidenavhead">
      <div>
        <img className="logo" src={logo} />
      </div>

      <div className="storename">
        <div>Nishyan</div>
        <a style={{ fontSize: "11px", color: "white" }} href="#">
          Visit Store
        </a>
      </div>

      <div className="downarrow">
        <img src={downarrow} />
      </div>
    </div>
  );
}

export default SidenavHead;
