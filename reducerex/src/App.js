import './App.css';
import {useState, useReducer} from 'react';
// state : 현재 가리키고 있는 상태
// reducer : state를 업데이트하는 역할. 즉, 함수이다.
// dispatch : state 업데이트를 위한 요구. 즉, 액션을 발생시키는 함수
// action : 요구하는 내용. 무엇을 무엇으로 업데이트 (어떤 값을 변경해야할지에 대한 정보) 
// 형태는 dispatch(action) -> 함수 안에 파라미터로 액션 값을 넣으면 리듀서 함수가 호출되는 구조

// useReducer 사용 시 장점 : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있음
const action_type = {
  deposit: 'deposit',
  withdraw: 'withdraw'
};

const reducer = (state, action) => { // action ==> {type: 'deposit', payload: 100000} : 100000원 만큼 입금할 것
  switch(action.type) {
    case action_type.deposit: return +state+ +action.payload;
    case action_type.withdraw: return +state- +action.payload; // 이해가 필요함
    default: return + state;
  }
}

function App() {
  const [money, setMoney] = useState(0);
  const [balance, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <h2>useReducer 은행</h2>
      <p>잔액 : {balance}</p>
      <input type="number" value={money} onInput={(e) => setMoney(e.target.value)} step="1000" />
      <button onClick={()=>dispatch({type:'deposit', payload:money})}>입금</button>
      <button onClick={()=>dispatch({type:'withdraw', payload:money})}>출금</button>
      
    </div>
  );
}

export default App;
