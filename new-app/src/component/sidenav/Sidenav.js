import React from "react";
import "./sidenav.css";
import SidenavHead from "./sidenav-head/SidenavHead";
import SidenavTop from "./sidenav-top/SidenavTop";
import SidenavBottom from "./sidenav-bottom/SidenavBottom";

function Sidenav() {
  return (
    <div className="sidenav-main">
      <SidenavHead />
      <SidenavTop />
      <SidenavBottom />
    </div>
  );
}

export default Sidenav;
