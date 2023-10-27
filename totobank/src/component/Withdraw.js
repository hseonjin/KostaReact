import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Swal from 'sweetalert2';

const Withdraw = () => {
  const style = {width:"600px", margin:"100px auto", padding:"30px", border:"1px solid #ddd0d0", borderRadius:"10px"}

    const [money, setMoney] = useState('');
    const withdraw = () => {
        Swal.fire(`${money}원이 출금되었습니다`)
    }
    return (
        <div style = {style}>
        <Form>
          <h2 style={{ margin: "5px 0 30px 0" }}>출금</h2>
          <FormGroup row>
            <Label for="Account" sm={2}>
              계좌번호
            </Label>
            <Col sm={10}>
              <Input type="text" name="Account" id="Account" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="money" sm={2}>
              출금액
            </Label>
            <Col sm={10}>
              <Input type="text" name="money" id="money" value={money} onChange={(e)=>setMoney(e.target.value)} />
            </Col>
          </FormGroup>
          <Button color="secondary" block="true" onClick={withdraw}>출금</Button>
        </Form>
      </div>
    );
};

export default Withdraw;