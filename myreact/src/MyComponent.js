import React, { Component } from "react";

// 클래스형 컴포넌트
class MyComponent extends Component {
  // 컴포넌트 생성자 메서드, 컴포넌트가 생성되면 가장 먼저 실행
  // this.props, this.state에 접근이 가능하고 리액트 요소 반환
  constructor(props) {
    super(props);
    this.state = {}; // state에 값을 준다면 아래의 static 변수 사용할 필요 없음
    console.log("constructor");
  }
  // props로부터 파생된 state를 가져옴. 즉, props로 받아온 것을 state에 넣어주고 싶을 때 사용
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    // return { test: "TEST" };
    return { param1: props.data, param2: "TEST" };
  }
  // 컴포넌트를 렌더링하는 메소드
  render() {
    console.log("render");
    return (
      <div>
        <h2>[ This is imported Component ]</h2>
      </div>
    );
  }
  // 컴포넌트가 마운트됨. 즉, 컴포넌트의 첫번쨰 렌더링을 마치면 호출되는 메서드
  // 이 메서드가 호출되는 시점에는 화면에 컴포넌트가 나타난 상태
  // 여기서 주로 dom을 사용해야하는 외부 라이브러리 연동, 해당 컴포넌트에서 필요로 하는 데이터를 요청
  componentDidMount() {
    console.log("componentDidMount: " + this.state.param1);
  }
  // 컴포넌트가 리렌더링 할지말지를 결정하는 메서드, T/F 반환
  shouldComponentUpdate(props, state) {
    console.log("shouldComponentUpdate");
    return true;
  }
  // 컴포넌트가 update되고 난 후 발생
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}

// 함수형(화살형) 컴포넌트
// let MyComponent = () => {
//     return(
//         <h2>[ This is imported Component ]</h2>
//     )
// }

export default MyComponent;
