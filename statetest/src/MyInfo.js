import { useState } from "react";

function MyInfo() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    return (
        <><hr/><br/>
            이름 : <input type="text" onChange={(e)=>setName(e.target.value)}/> = {name}<br/>
            나이 : <input type="text" onChange={(e)=>setAge(e.target.value)} /> = {age}<br/>
            주소 : <input type="text" onChange={(e)=>setAddress(e.target.value)} /> = {address}<br/>
        </>
    )
};

export default MyInfo;