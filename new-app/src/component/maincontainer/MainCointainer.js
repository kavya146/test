import "./maincontainer.css";
import Header from "./header/Header";
import Overview from "./overview/Overview";
import TableContainerMain from "./tablecontainer/TableContainerMain";
const MainContainer = () => {
  return (
    <div className="maincontainer">
      <Header />
      <div style={{ margin: "30px" }}>
        <Overview />
      </div>
      <TableContainerMain />
    </div>
  );
};

export default MainContainer;
