import React from 'react';
import { Table } from 'reactstrap';

const AllAccountInfo = () => {
    const style = {width:"600px", margin:"20px auto", padding:"30px", border:"1px solid #ddd0d0", borderRadius:"10px"}
        // const [info, setInfo] = useState(false);
    // const accInfo = () => {
    //     const data = {accountNumber: '10001', name: '홍길동', balance:'100000', type:'normal'}
    //     setInfo(data);
    // }

    return (
    <div style={style}>
        <h2 style={{ margin: "5px 0 30px 0" }}>전체계좌조회</h2>
        <Table bordered>
          <thead>
            <tr>
              <th>계좌번호</th>
              <th>이름</th>
              <th>잔액</th>
              <th>종류</th>
              <th>등급</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>홍길동</td>
              <td>1000000</td>
              <td>normal</td>
              <td></td>
            </tr>
            <tr>
              <td>1002</td>
              <td>김길동</td>
              <td>2000000</td>
              <td>special</td>
              <td>VIP</td>
            </tr>
            <tr>
              <td>1003</td>
              <td>고길동</td>
              <td>3000000</td>
              <td>special</td>
              <td>GOLD</td>
            </tr>
            <tr>
              <td>1004</td>
              <td>하길동</td>
              <td>4000000</td>
              <td>normal</td>
              <td></td>
            </tr>
            <tr>
              <td>1005</td>
              <td>장길동</td>
              <td>5000000</td>
              <td>special</td>
              <td>Silver</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
};

export default AllAccountInfo;