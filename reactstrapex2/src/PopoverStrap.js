import { useEffect, useState } from "react";
import { Button, Popover, PopoverBody, PopoverHeader, Progress } from "reactstrap";

const PopoverStrap = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      plusValue();
    }, []);
  });
  const plusValue = () => {
    setInterval(() => {
      setValue(value + 1);
    }, 1000);
  };
  return (
    <div>
      <Button id="Popover1" type="button" onClick={() => setOpen(!open)}>
        제목
      </Button>
      <Popover
        flip
        target="Popover1"
        isOpen={open}
        toggle={() => setOpen(!open)}
      >
        <PopoverHeader>제목</PopoverHeader>
        <PopoverBody>적당한 길이의 내용 삽입</PopoverBody>
      </Popover>
      <br />
      <br />
      <Progress value={value} />
    </div>
  );
};

export default PopoverStrap;
