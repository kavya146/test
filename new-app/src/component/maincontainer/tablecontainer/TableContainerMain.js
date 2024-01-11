import dummydata from "../../../testdata/tabledata";
import success from "./success.svg";
import process from "./process.svg";

const TableContainerMain = () => {
  return (
    <div style={{ margin: "0px 70px 0px 70px", border: "5px" }}>
      <table
        style={{ width: "100%", textAlign: "left", backgroundColor: "white" }}
      >
        <tr style={{ backgroundColor: "#f2f2f2", height: "50px" }}>
          <th>Order ID</th>
          <th>Status</th>
          <th>Transaction ID</th>
          <th>Refund date</th>
          <th>Order amount</th>
        </tr>
        {dummydata.map((val, key) => (
          <tr
            style={{
              height: "50px",
              borderBottomWidth: "2px",
              borderBottomStyle: "groove",
              borderBottomColor: "grey",
            }}
          >
            <td>#{val.orderId}</td>
            <td>
              {val.status === "Successful" ? (
                <img src={success} />
              ) : (
                <img src={process} />
              )}{" "}
              {val.status}
            </td>
            <td>{val.transactionId}</td>
            <td>{val.refundDate}</td>
            <td>
              <span>&#8377;</span>
              {val.orderAmount}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableContainerMain;
