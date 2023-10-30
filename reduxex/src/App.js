import './App.css';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Page1 from './Page1';

// const initState = {
//   data1:'NONE', data2:0
// }
const reducer = (state, action) => {
  if(state === undefined) { // 처음 호출 시에 없는 경우 기본값
    return {data1:'NONE', data2:0}
  }
  const newState = {...state};
  switch(action.type) {
    case "STRING": newState.data1=action.data; break; // 문자열이 들어오는 경우
    case "INT" : newState.data2=action.data; break;
    default: 
  }
  return newState;
}

const store = configureStore({reducer});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Page1 />
      </div>
    </Provider>
  );
}

export default App;
