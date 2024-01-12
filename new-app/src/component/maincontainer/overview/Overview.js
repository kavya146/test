import "./overview.css";
import questionmark from "./qustion.svg";
import questionmarkb from "./questionb.svg";
import { overview } from "../../../testdata/tabledata";

function Overview() {
  return (
    <div className="overview">
      <div className="overviewhead">
        <div style={{ fontWeight: "600", fontSize: "20px" }}>Overview</div>
        <div>
          <select
            style={{ height: "25px", width: "150px", borderRadius: "5px" }}
            name="cars"
            id="cars"
          >
            <option value="month">This Month</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "30%",
            backgroundColor: "#286ab0",
            borderRadius: "5px",
            margin: "20px",
            color: "white",
          }}
        >
          <div
            style={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
              margin: "20px 20px 0px 20px",
            }}
          >
            Net Payout &nbsp;&nbsp;&nbsp;
            <img style={{ color: "white" }} src={questionmark} />
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "20px",
              marginRight: "20px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>
              <span>&#8377;</span>
              {overview.netPay.pay}
            </h3>
            <a href="#" style={{ color: "white" }}>
              {overview.netPay.orders} Orders{" "}
            </a>
          </div>
          <div
            style={{
              display: "flex",
              borderRadius: "8px",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#0E4F82",
              height: "40px",
            }}
          >
            <div style={{ marginLeft: "20px" }}>Net payout date:</div>
            <div style={{ marginRight: "20px" }}>{overview.netPay.date}</div>
          </div>
        </div>

        <div
          style={{
            width: "30%",
            backgroundColor: "white",
            borderRadius: "5px",
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "95%",
          }}
        >
          <div style={{ margin: "20px 20px 0px 20px" }}>
            Amount Pending &nbsp;
            <img style={{ color: "white" }} src={questionmarkb} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ marginLeft: "20px" }}>
              <span>&#8377;</span>
              {overview.amountPending.pay}
            </h3>
            <h3>
              {" "}
              <a href="#" style={{ marginRight: "20px", color: "black" }}>
                {overview.amountPending.orders} Orders{" "}
              </a>
            </h3>
          </div>
        </div>

        <div
          style={{
            width: "30%",
            backgroundColor: "white",
            borderRadius: "5px",
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "95%",
          }}
        >
          <div style={{ margin: "20px 20px 0px 20px" }}>
            Amount Processed &nbsp;&nbsp;
            <img style={{ color: "white" }} src={questionmarkb} />
          </div>
          <div>
            <h3 style={{ marginLeft: "20px" }}>
              <span>&#8377;</span>
              {overview.amountProcessed}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
