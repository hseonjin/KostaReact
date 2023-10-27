import { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Table } from 'reactstrap';

const AccountInfo = () => {
    const style = {width:"600px", margin:"20px auto", padding:"30px", border:"1px solid #ddd0d0", borderRadius:"10px"}
    const [showTable, setShowTable] = useState(false);

    return (
      <div style={style}>
        <Form>
          <h2 style={{ margin: "5px 0 30px 0" }}>계좌조회</h2>
          <FormGroup row>
            <Label for="Account" sm={2}>
              계좌번호
            </Label>
            <Col sm={8}>
              <Input type="text" name="Account" id="Account" />
            </Col>
            <Button sm={2} color="secondary" onClick={(e) => setShowTable(!showTable)}>
              계좌조회
            </Button>

            {showTable && ( // showTable이 true일 때만 테이블을 렌더링
            <Table bordered style={{marginTop:"20px"}} >
              <tbody>
                <tr>
                  <th scope="row">계좌번호</th>
                  <td>10001</td>
                </tr>
                <tr>
                  <th scope="row">이름</th>
                  <td>홍길동</td>
                </tr>
                <tr>
                  <th scope="row">잔액</th>
                  <td>100000</td>
                </tr>
                <tr>
                  <th scope="row">계좌종류</th>
                  <td>normal</td>
                </tr>

              </tbody>
            </Table>
            )}
          </FormGroup>
        </Form>
      </div>
    );
};

export default AccountInfo;