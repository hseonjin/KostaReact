import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function ModalStrap() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  }
  return (
    <>
      <Button color="danger" onClick={toggle}>Click</Button>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet,
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>확인</Button>{" "}
          <Button color="secondary" onClick={toggle}>취소</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalStrap;
