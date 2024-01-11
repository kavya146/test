import success from "./success.svg";
import process from "./process.svg";
import { dummydata } from "../../../testdata/tabledata";
import searchlogo from "../header/searchlogo.svg";
import sort from "../sort.svg";
import { useState } from "react";

const TableContainerMain = () => {
  const [data, setData] = useState(dummydata);
  return (
    <>
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
            onChange={(e) => {
              const val = e.target.value;
              const newData = [];
              console.log(data);
              dummydata.map((element, key) => {
                if (
                  val === "" ||
                  ("" + element.orderId).includes(val) ||
                  ("" + element.transactionId).includes(val)
                ) {
                  newData.push(element);
                }
              });
              setData(newData);
            }}
          />
        </div>
        <div>
          <img src={sort} />
        </div>
      </div>
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
          {data.map((val, key) => (
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
    </>
  );
};

export default TableContainerMain;
