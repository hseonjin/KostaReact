import logo from "./logo.svg";
import "./App.css";
import StateComp from "./StateComp";
import FStateComp from "./FStateComp";
import MyInfo from "./MyInfo";

function App() {
  return (
    <div className="App">
      <StateComp />
      <FStateComp />
      <MyInfo/>
    </div>
  );
}

export default App;
