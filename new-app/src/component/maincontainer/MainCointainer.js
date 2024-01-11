import "./maincontainer.css";
import Header from "./header/Header";
import Overview from "./overview/Overview";
import TableContainerMain from "./tablecontainer/TableContainerMain";
import { overview } from "../../testdata/tabledata";
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
              cursor: "pointer",
            }}
          >
            Payouts ({overview.totalpayout})
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
            Refunds ({overview.totalrefunds})
          </span>
        </div>
      </div>

      <TableContainerMain />
    </div>
  );
};

export default MainContainer;
