import React, { useReducer, useState } from "react";
import { initState, reducer } from "./MyReducer2";
import MyNickname from './MyNickname'

const ReducerEx2 = () => {
//   const [id, setId] = useState("");
//   const [nickname, setNickname] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [info, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      {/* 입력과 동시에 변경되는 방식 */}
      <label>{info.id}</label>&nbsp;&nbsp;&nbsp;
      <input type="text" onInput={(e) => dispatch({type:"CHANGE_ID", value:e.target.value})} />
      {/* <input type="text" onInput={(e) => setId(e.target.value)} />
      <button onClick={() => dispatch({type:'CHANGE_ID', value:id})}>아이디 변경</button> */}
      <br />
      {/* dispatch 파일을 분리하여 사용하는 방식 */}
      <MyNickname info={info} dispatch={dispatch} />
      <br />
      {/* 버튼 클릭 시 변경되는 방식 */}
      <label>{info.subject}</label>
      <input type="text" onInput={(e) => setSubject(e.target.value)} />
      <button onClick={() => dispatch({type:'CHANGE_SUBJECT', value:subject})}>전공 변경</button>
      <br />
      <label>{info.grade}</label>
      <input type="text" onInput={(e) => setGrade(e.target.value)} />
      <button onClick={() => dispatch({type:'CHANGE_GRADE', value:grade})}>학년 변경</button>
    </div>
  );
};

export default ReducerEx2;
