import React, { useState } from 'react';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown } from 'reactstrap';

const BankTop = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {setOpen(!open)}
    return (
      <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Kosta Bank</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/login/">로그인</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/join/">회원가입</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>계좌</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/makeAccount/'>계좌개설</DropdownItem>
                <DropdownItem href='/accountInfo/'>계좌조회</DropdownItem>
                <DropdownItem href='/deposit'>입금</DropdownItem>
                <DropdownItem href='/withdraw'>출금</DropdownItem>
                <DropdownItem href='/allAccountInfo'>전체계좌조회</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
};

export default BankTop;