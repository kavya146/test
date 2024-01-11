import "./App.css";
import MainContainer from "./component/maincontainer/MainCointainer";
import Sidenav from "./component/sidenav/Sidenav";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <MainContainer />
    </div>
  );
}

export default App;
