import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Northwind App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/formtutorial/">
                Form Tutorial
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/formtutorial2/">
                Form Tutorial 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary
              removeFromCart={props.removeFromCart}
              cart={props.cart}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
