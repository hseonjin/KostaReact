import { useState } from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

function DropdownStrap() {
    const [open, setOpen] = useState(true);
    return (
        <>
            <ButtonDropdown direction="right" isOpen={open} toggle={()=>setOpen(!open)}>
                <DropdownToggle caret color="success" size="sm">버튼 드롭다운</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem disabled>비활성화버튼</DropdownItem>
                    <a href="http://naver.com">
                        <DropdownItem>다음 사이트로 이동</DropdownItem>
                    </a>
                    <DropdownItem onClick={()=>alert("Alert버튼")}>Alert 버튼</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </>
    )
}

export default DropdownStrap;