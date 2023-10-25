import { useState } from "react";
import UserAdd from "./UserAdd"
function UserTable() {
    const [userList, setUserList] = useState([]);

    return (
        <div>
        <UserAdd userList={userList} setUserList={setUserList} />
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
    )
}

export default UserTable;