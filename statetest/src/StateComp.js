import React, { Component } from "react";

class StateComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        stateString: "react",
        stateNumber: 123
    };
  }

  stringChange = (e) => {
    this.setState({ stateString: "리액트" });
    };
    
    numberChange = (e) => {
        this.setState({ stateNumber: 321 });
 }

  render() {
    return (
      <>
        <p>클래스형</p>

        <button onClick={(e) => {this.stringChange(e);}}>state 변경</button>
        <button onClick={(e) => {this.numberChange(e);}}>number 변경</button><br />
        StateString : {this.state.stateString}<br/>
        StateNumber : {this.state.stateNumber}
      </>
    );
  }
}

export default StateComp;
