import { useState } from "react";
import { Tooltip } from "reactstrap";

const TooltipsStrap = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {setOpen(!open)};
    return (
      <div style={{ width: "800px" }}>
        <p>
            Somewhere in here is a <span style={{textDecoration:"underline", color:"blue"}} id="tooltip">tooltip</span>
        </p>
        <Tooltip placement="right" isOpen={open} target="tooltip" toggle={toggle}>
          Hello Tooltip!
        </Tooltip>
      </div>
    );
};

export default TooltipsStrap;