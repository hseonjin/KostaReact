import { useState } from 'react';
import {Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><i><b>kosta.com</b></i></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/login/">로그인</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/join/">회원가입</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/boardList/">게시판</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
