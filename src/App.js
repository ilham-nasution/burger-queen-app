import React from "react";
import Header from "./components/Header";
import "./style.scss";
import Burger from "./components/Burger";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Burger />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
