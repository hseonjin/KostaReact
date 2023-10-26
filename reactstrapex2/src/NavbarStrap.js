import { useState } from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown } from "reactstrap";

function NavbarStrap() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return (
        <div style={{width:"800px"}}>
            <Navbar color="light" expand="md"> {/* expand="md"> : 확장 // light :  hamburger nav */}
                <NavbarBrand href="/">kosta</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={open} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="http://naver.com">네이버</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://daum.com">다음</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>Options</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem>Option 3</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarStrap;