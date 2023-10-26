import { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function ModalStrap() {
  const [open, setOpen] = useState(false);
  const [fruit, setFruit] = useState('banana');

  const toggle = () => setOpen(!open);
  const change = (e) =>  {
    console.log(e.target.value);
    setFruit(e.target.value);
  }
  const send = () => {console.log("전송")};

  return (
    <>
      <div style={{width:"800px"}}>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label>과일 선택</Label>&nbsp;&nbsp;
            <Input type="select" onChange={change}>
              <option value="banana">바나나</option>
              <option value="apple">사과</option>
              <option value="orange">오렌지</option>
              </Input>
          </FormGroup>
          &nbsp;&nbsp;
          <Button color = "primary" onClick={toggle}>전송</Button>
          </Form>
          <Modal isOpen={open} toggle={toggle}>
            <ModalHeader toggle={toggle}>전송 여부 확인</ModalHeader>
            <ModalBody>{fruit}를 선택하셨습니다<br/>전송하시겠습니까?</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={send}>확인</Button>{' '}
              <Button color="secondary" onClick={toggle}>취소</Button>            
            </ModalFooter>

          </Modal>
      </div>
    </>
  );
}

export default ModalStrap;
