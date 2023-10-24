function MyComponent({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
}

// import React, { Component } from "react";
// 클래스형
// class MyComponent extends Component {
//   render() {
//     // 방법 3
//     let { name, age } = this.props.info;

//     return (
//       <div>
//         {/* 부모 컴포넌트에서 설정한 props 값을 받아오기 */}
//         {/* <h1>{this.props.info.name}</h1>
//         <h1>{this.props.info.age}</h1> */}
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//       </div>
//     );
//   }
// }

export default MyComponent;
