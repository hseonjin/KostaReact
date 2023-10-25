import './App.css';
import React, {useState} from 'react';

function App() {
  const [user, setUser] = useState({name:'', age:'', address:'', tel:''});
  const change = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({...user, [name]:value});
  }
  return (
    <div className="App">
            이름 : <input type="text" name="name" onChange={change}/><br/>
            나이 : <input type="text" name="age" onChange={change}/><br/>
            주소 : <input type="text" name="address" onChange={change}/><br/>
            전화번호 : <input type="text" name="tel" onChange={change}/><br/>
    <div>
      <table border="1">
        <tbody>
         <tr><th>이름</th><th>나이</th><th>주소</th><th>전화번호</th></tr> 
         <tr><th>{user.name}</th><th>{user.age}</th><th>{user.address}</th><th>{user.tel}</th></tr> 
        </tbody>
      </table>
    </div>
    </div>
  );

}


export default App;
