import React, { useState } from 'react';
import Component2 from './Component2';

const Component1 = () => {
    const [user, setUser] = useState("Jesse Halll");

    return (
        <div>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} setUser={setUser}/>
        </div>
    );
};

export default Component1;