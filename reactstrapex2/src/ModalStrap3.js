import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function ModalStrap() {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };
  return (
    <>
    <div>
      <Button color="danger" onClick={toggle}>첫 모달</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>고구마호박</ModalHeader>
        <ModalBody>
          호박고구마 호박고구마!
          <br />
          <Button color="success" onClick={toggleNested}>두 번째 모달</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>안녕하세요?</ModalHeader>
            <ModalBody>모달 안의 모달</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>처리</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>취소</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>확인</Button>{' '}
          <Button color="secondary" onClick={toggle}>취소</Button>
        </ModalFooter>
      </Modal>
    </div>
    </>
  );
}

export default ModalStrap;
