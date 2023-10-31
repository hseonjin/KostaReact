import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

const CulturalEventInfo = () => {
    const [culturalList, setCulturalList] = useState([]);
    useEffect(() => {
        axios.get('http://openapi.seoul.go.kr:8088/4864596d7173656f3131306649487165/json/culturalEventInfo/1/5/')
        .then(res=> {
            console.log(res.data.culturalEventInfo.row);
            setCulturalList(res.data.culturalEventInfo.row);
        })
    }, [])

    return (
        <div>
            <Table bordered style={{margin:'10px'}}>
        <tr>
          <th>종류</th>
          <th>지역</th>
          <th>제목</th>
          <th>기간</th>
          <th>위치</th>
        </tr>
        {culturalList.map((cul) => (
          <tr key={cul.TITLE}>
            <td>{cul.CODENAME}</td>
            <td>{cul.GUNAME}</td>
            <td>{cul.TITLE}</td>
            <td>{cul.DATE}</td>
            <td>{cul.PLACE}</td>
          </tr>
        ))}
      </Table>
        </div>
    );
};

export default CulturalEventInfo;