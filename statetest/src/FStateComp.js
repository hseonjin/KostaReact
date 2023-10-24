import {useState} from 'react';
const FStateComp = () => {
    const [stateString, setStateString] = useState('react');
    const [stateNumber, setStateNumber] = useState(123);

    // const stringChange = () => {
    //     setStateString("리액트");
    //   };
    
    //   const numberChange = () => {
    //     setStateNumber(321);
    //   };

    return (
        <>
        <hr/><br/>
        <p>함수형</p>
          <button onClick={()=>{setStateString('리액트')}}>state 변경</button>
          <button onClick={()=>{setStateNumber(321)}}>number 변경</button><br />
          StateString : {stateString}<br/>
          StateNumber : {stateNumber}
        </>
      );
}

export default FStateComp;