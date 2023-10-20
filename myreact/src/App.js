import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";

/* data="PTEST"는 props를 통해 자식 컴포넌트에 보내줄 내용 */
function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <MyComponent data="PTEST" />
    </div>
  );
}

export default App;
