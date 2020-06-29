import React, { Component } from "react";
import Header from "./components/Header";
import "./style.scss";
import Burger from "./components/Burger";
import { Container, Col, Row } from "react-bootstrap";
import Menu from "./components/Menu";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { meat: 0, cheese: 0 };
  }

  handleMeatPlusBtn = () => {
    this.setState({
      meat: ++this.state.meat,
    });
  };

  handleMeatMinusBtn = () => {
    this.setState({
      meat: Math.max(0, --this.state.meat),
    });
  };

  handleCheesePlusBtn = () => {
    this.setState({
      cheese: ++this.state.cheese,
    });
  };

  handleCheeseMinusBtn = () => {
    this.setState({
      cheese: Math.max(0, --this.state.cheese),
    });
  };

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col>
              <Burger meat={this.state.meat} cheese={this.state.cheese} />
              <Menu
                meat={this.state.meat}
                cheese={this.state.cheese}
                cheeseMinusBtn={this.handleCheeseMinusBtn}
                meatMinusBtn={this.handleMeatMinusBtn}
                cheesePlusBtn={this.handleCheesePlusBtn}
                meatPlusBtn={this.handleMeatPlusBtn}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
