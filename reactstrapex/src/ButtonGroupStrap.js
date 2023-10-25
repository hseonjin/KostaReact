import { useState } from "react";
import { Button, ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

function ButtonGroupStrap() {
    const [number, setNumber] = useState(0);
    const [open, setOpen] = useState(true);
    return (
        <>
        <br/>
            <ButtonGroup>
                <button>&lt;</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>&gt;</button>
            </ButtonGroup><br/><br/>
            <ButtonGroup>
                <button onClick={()=>setNumber(number-1)}>-</button>
                <button disabled>{number}</button>
                <button onClick={()=>setNumber(number+1)}>+</button>
            </ButtonGroup><br/><br/>
            <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>
                <ButtonDropdown isOpen={open} toggle={()=>setOpen(!open)}>
                    <DropdownToggle caret>선택</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>3</DropdownItem>
                        <DropdownItem>4</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </ButtonGroup>
        </>
    );
};

export default ButtonGroupStrap;