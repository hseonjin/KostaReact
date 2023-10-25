import logo from "./logo.svg";
import "./App.css";
import StateComp from "./StateComp";
import FStateComp from "./FStateComp";
import MyInfo from "./MyInfo";
import { PageInfo, PageInfo2 } from "./ImportTest";

function App() {
  return (
    <div className="App">
      <StateComp />
      <FStateComp />
      <MyInfo/>
      <PageInfo/>
      <PageInfo2/>
    </div>
  );
}

export default App;
