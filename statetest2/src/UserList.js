import { useState } from "react";

function UserList() {
  const [user, setUser] = useState({ name: "", age: "", address: "", tel: "" });
  const [userList, setUserList] = useState([]);
  const change = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const addUser = (e) => {
    setUserList([...userList, user]);
    setUser({name:'', age:"", address: "", tel: "" })
  }
  return (
    <div className="App">
      이름 : <input type="text" name="name" value={user.name} onChange={change} /><br />
      나이 : <input type="text" name="age" value={user.age} onChange={change} /><br />
      주소 : <input type="text" name="address" value={user.address} onChange={change} /><br />
      전화 : <input type="text" name="tel" value={user.tel} onChange={change} /><br />
      <button onClick={addUser}>추가</button><br /><br />
      <div>
        {/* 데이터가 하나라도 존재하는 경우에만 테이블을 생성하도록 설정하는 부분임 
        왼쪽이 true인 경우에 오른쪽 코드를 실행하는 것
        t/f인지를 출력하는 것이 아니라 다음 코드 자체를 실행시켜버림 
        바벨을 지원하는 리액트에서만 가능한 것, 조건 자체에 태그를 삽입하는 것 */}
        {userList.length>0 && <table border="1">
          <tbody>
          <tr>
              <th>이름</th>
              <th>나이</th>
              <th>주소</th>
              <th>전화</th>
            </tr>
            {userList.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.address}</td>
                  <td>{item.tel}</td>
                </tr>
              );
            })}
          </tbody>
        </table>}
      </div>
    </div>
  );
}

export default UserList;
