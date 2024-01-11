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
        <tr style={{ height: "50px" }}>
          <td>#2234565</td>
          <td>Successful</td>
          <td>1234567765456</td>
          <td>Today, 08:45 PM</td>
          <td>23556.34</td>
        </tr>
      </table>
    </div>
  );
};

export default TableContainerMain;
