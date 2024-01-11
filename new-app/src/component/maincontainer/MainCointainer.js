import "./maincontainer.css";
import Header from "./header/Header";
import Overview from "./overview/Overview";
import TableContainerMain from "./tablecontainer/TableContainerMain";
import searchlogo from "../maincontainer/header/searchlogo.svg";
import sort from "./sort.svg";
const MainContainer = () => {
  return (
    <div className="maincontainer">
      <Header />
      <div style={{ margin: "30px" }}>
        <Overview />
      </div>
      <div style={{ margin: "10px 0px 20px 70px" }}>
        <h2>Transactions | This Month</h2>
      </div>

      <div style={{ margin: "30px 0px 20px 70px", display: "flex" }}>
        <div>
          <span
            style={{
              backgroundColor: "#e6e6e6",
              width: "118px",
              height: "32px",
              borderRadius: "40px",
              padding: "10px 16px",
              textAlign: "center",
              marginRight: "30px",
            }}
          >
            Payouts (22)
          </span>
        </div>
        <div style={{ cursor: "pointer" }}>
          <span
            style={{
              backgroundColor: "#286ab0",
              width: "148px",
              height: "32px",
              borderRadius: "40px",
              padding: "10px 16px",
              textAlign: "center",
              marginRight: "30px",
              color: "white",
            }}
          >
            Refunds (6)
          </span>
        </div>
      </div>

      <div
        style={{
          margin: "10px 70px 10px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            style={{ position: "relative", left: "50px" }}
            src={searchlogo}
          />
          <input
            style={{
              width: "400px",
              height: "40px",
              textAlign: "center",
              margin: "10px",
              borderRadius: "6px",
            }}
            type="text"
            placeholder="Order ID or transaction ID"
          />
        </div>
        <div>
          <img src={sort} />
        </div>
      </div>

      <TableContainerMain />
    </div>
  );
};

export default MainContainer;
