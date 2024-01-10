import React from "react";
import "./sidenavtop.css";
import home from "./home.svg";
import orders from "./orders.svg";
import products from "./products.svg";
import delivery from "./delivery.svg";
import marketing from "./marketing.svg";
import analytics from "./analytics.svg";
import payouts from "./payouts.svg";
import discounts from "./discounts.svg";
import audience from "./audience.svg";
import appearance from "./appearance.svg";
import plugins from "./plugins.svg";

function SidenavTop() {
  return (
    <div className="sidenavtop">
      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={home} />
        </div>
        <div>Home</div>
      </div>

      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={orders} />
        </div>
        <div>Orders</div>
      </div>

      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={products} />
        </div>
        <div>Products</div>
      </div>

      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={delivery} />
        </div>
        <div>Delivery</div>
      </div>

      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={marketing} />
        </div>
        <div>Marketing</div>
      </div>

      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={analytics} />
        </div>
        <div>Analytics</div>
      </div>

      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={payouts} />
        </div>
        <div>Payouts</div>
      </div>

      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={discounts} />
        </div>
        <div>Discounts</div>
      </div>

      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={audience} />
        </div>
        <div>Audience</div>
      </div>

      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={appearance} />
        </div>
        <div>Appearance</div>
      </div>

      <div className="sidenames">
        <div>
          <img style={{ marginRight: "10px" }} src={plugins} />
        </div>
        <div>Plugins</div>
      </div>
    </div>
  );
}

export default SidenavTop;
