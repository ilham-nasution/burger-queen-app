import React, { useState } from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import Cart from "./Cart";

const Header = ({ order }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Navbar variant="dark">
        <Navbar.Brand href="/">Burger Queen</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#" onClick={() => setModal(true)}>
            Orders <Badge variant="secondary">{order.length}</Badge>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Cart order={order} show={modal} onHide={() => setModal(false)} />
    </>
  );
};

export default Header;
