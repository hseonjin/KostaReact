import "./App.css";
import MyComponent from "./MyComponent";
import PropsBoolean from "./PropsBoolean";
import PropsDataType from "./PropsDataType";
import PropsNode from "./PropsNode";
import PropsRequired from "./PropsRequired";

function App() {
  // 방법 3
  return (
    <div className="App">
      {/* <MyComponent name="hong" age="30" />
      <MyComponent info={{ name: "hong", age: "30" }} /> */}
      {/* 자바스크립트 코드임을 알려주는 {}와 객체임을 알려주는 {} -> {{}} 넘겨야할 데이터가 많은 경우 */}
      {/* <PropsDataType
        String="react"
        Number={123}
        Boolean={1 == 1}
        Array={[1, 2, 3]}
        ObjectJson={{ react: "리액트", version: 123 }}
        Function={console.log("FunctionProps:function!")}
      />
      <PropsBoolean BooleanTrueFalse={false} />
      <PropsBoolean BooleanTrueFalse />

      <PropsRequired ReactVersion={123} /> */}
      <PropsNode>
        <span>??</span>
      </PropsNode>
    </div>
  );
}

export default App;
