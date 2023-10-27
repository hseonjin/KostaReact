import { useState } from 'react';
import {Form, Col, FormGroup, Label, Input, Button} from 'reactstrap'
import Swal from 'sweetalert2';

const MakeAccount = () => {
  const style = {width:"600px", margin:"100px auto", padding:"30px", border:"1px solid #ddd0d0", borderRadius:"10px"}

  const [type, setType] = useState("normal"); // 현재 선택한 type 저장 (기본 선택값 normal)
  const [grade, setGrade] = useState(false); // grade 비활성화 (grade가 true인 경우 활성화)
  const onChange = (e) => {
    setType(e.target.value); // 선택한 type 값 변경
    setGrade(e.target.value === 'special'); // special을 선택한 경우 grade 활성화 (setGrade가 호출되면 true로 변경)
  }

    const onClick = () => {
        Swal.fire(
            '계좌 개설 완료',
            '계좌 개설이 완료되었습니다',
            'success'
          )
    }
  return (
    <div style={style}>
      <Form>
        <h2 style={{margin:"5px 0 30px 0"}}>계좌개설</h2>
        <FormGroup row>
          <Label for="Account" sm={2}>계좌번호</Label>
          <Col sm={10}>
            <Input type="text" name="Account" id="Account" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="name" sm={2}>이름</Label>
          <Col sm={10}>
            <Input type="text" name="name" id="name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="money" sm={2}>입금액</Label>
          <Col sm={10}>
            <Input type="text" name="money" id="money" />
          </Col>
        </FormGroup>

        <FormGroup tag="fildset" row>
            <Label for="Account" sm={2}>계좌종류</Label>
            <Col sm={10}>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="normal" value='normal' checked={type==='normal'} onChange={onChange}/>일반계좌
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="special" value='special' checked={type==='special'} onChange={onChange}/>특수계좌
                    </Label>
                </FormGroup>
            </Col>
            </FormGroup>

        <FormGroup row>
                <Label for="grade" sm={2}>등급</Label>
                <Col sm={10}>
                <Input type="select" name="select" id="grade" disabled={!grade}>
                    <option>VIP</option>
                    <option>GOLD</option>
                    <option>SILVER</option>
                    <option>NORMAR</option>
                </Input>
                </Col>
        </FormGroup>
        <Button onClick={onClick} color="secondary" block="true">계좌개설</Button>
      </Form>
    </div>
  );
};

export default MakeAccount;
