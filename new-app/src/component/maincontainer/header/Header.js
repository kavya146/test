import React from "react";
import questionmark from "./questionmark.svg";
import searchlogo from "./searchlogo.svg";
import grouplogo from "./group.svg";
import polygonlogo from "./polygon.svg";
import "./header.css";

function header() {
  return (
    <div className="header">
      <div className="payoutcontainer">
        <div className="payout">Payouts</div>
        <div style={{ display: "flex" }}>
          <img
            style={{ marginTop: "5px", marginRight: "5px" }}
            src={questionmark}
          />
          <div style={{ marginTop: "14px", fontSize: "12px" }}>
            How it works?
          </div>
        </div>
      </div>

      <div>
        <img style={{ position: "relative", left: "40px" }} src={searchlogo} />
        <input
          className="searchcontainer"
          type="text"
          placeholder="Search features, tutorials, etc."
        />
      </div>

      <div className="logocontainer">
        <img style={{ marginRight: "15px" }} src={grouplogo} />
        <img src={polygonlogo} />
      </div>
    </div>
  );
}

export default header;
