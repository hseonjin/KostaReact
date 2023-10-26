import { useState } from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, InputGroupButtonDropdown, DropdownMenu, DropdownToggle, DropdownItem} from 'reactstrap'

function InputGroupStrap() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input placeholder = "username"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <Input addon type="checkbox" area-label="Checkbox for following text in"/>
                    </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Check it out"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <Input placeholder = "username"/>
                <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input placeholder = "Amount" type="number"/>
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupButtonDropdown addonType="prepend" isOpen={open} toggle={()=>setOpen(!open)}>
                    <DropdownToggle caret>Split outline</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input/>
            </InputGroup>
        </>
    );
};

export default InputGroupStrap;

// 선진씌 안녕하세요? 저는 당신의 옛 짝꿍이예요... 잘 지내고 계신가요?? 수빈씨가 안괴롭히죠??? 괴롭히면 말해요 뒤에서 열심히 찌를게요 ㅎㅎㅎㅎ 