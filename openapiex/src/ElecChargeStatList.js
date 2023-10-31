import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import axios from 'axios';

const ElecChargeStatList = () => {
  const [chargeList, setChargeList] = useState([]);
  useEffect(()=> {
    axios.get('http://openapi.seoul.go.kr:8088/4864596d7173656f3131306649487165/json/evChargingStation/1/5/')
    .then(res => {
        console.log(res.data.evChargingStation.row);
        setChargeList(res.data.evChargingStation.row);
    })
  }, [])

  return (
    <div>
      <Table bordered style={{margin:'10px'}}>
        <tr>
          <th>충전소</th>
          <th>주소</th>
          <th>충전기타입</th>
          <th>이용가능시간</th>
          <th>충전용량</th>
        </tr>
        {chargeList.map((charge) => (
          <tr key={charge.CHARGING_STATION + charge.CHARGER_ID}>
            <td>{charge.CHARGER_ID}</td>
            <td>{charge.CHARGING_STATION}</td>
            <td>{charge.ADDR}</td>
            <td>{charge.UTZTN_PSBLTY_TM}</td>
            <td>{charge.CHARGING_CAPACITY}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default ElecChargeStatList;
