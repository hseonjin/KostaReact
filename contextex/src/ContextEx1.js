import React, { createContext, useState } from "react";
import ContextEx2 from "./ContextEx2";

const ContextEx1 = () => {
  const [user, setUser] = useState("Jesse Halll");
  const context = { user, setUser: setUser.bind(this) };
  // 공유한 데이터를 객체로 만든 것이고, UserContexct 담은 것
  // 객체 값을 줄 때, k,v의 쌍으로 가는데, k와 v가 같은 경우에는 하나만 써도 무방
  // 함수를 보내는 경우에는 setUser:setUser.bind(this) bind를 사용함
  return (
    <div>
      {/* 얘로 싸여져 있는 모든 자식 컴포넌트들은 해당 상태를 가져다 사용할 수 있음을 의미함  */}
      <UserContext.Provider value={context}>
        <h1>{`Hello ${user}`}</h1>
        <ContextEx2 />
      </UserContext.Provider>
    </div>
  );
};

export const UserContext = createContext();

export default ContextEx1;
