import React, { Component } from "react";
import Header from "./components/Header";
import "./style.scss";
import Burger from "./components/Burger";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { meat: 0, cheese: 0 };
  }

  handleMeatPlusBtn = () => {
    if (this.state.meat < 3) {
      this.setState({
        meat: ++this.state.meat,
      });
    }
  };

  handleMeatMinusBtn = () => {
    this.setState({
      meat: Math.max(0, --this.state.meat),
    });
  };

  handleCheesePlusBtn = () => {
    if (this.state.cheese < 3) {
      this.setState({
        cheese: ++this.state.cheese,
      });
    }
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
          <div className="center">
            <div>
              <Burger meat={this.state.meat} cheese={this.state.cheese} />
              <Menu
                meat={this.state.meat}
                cheese={this.state.cheese}
                cheeseMinusBtn={this.handleCheeseMinusBtn}
                meatMinusBtn={this.handleMeatMinusBtn}
                cheesePlusBtn={this.handleCheesePlusBtn}
                meatPlusBtn={this.handleMeatPlusBtn}
              />
            </div>
          </div>
        </Container>
      </>
    );
  }
}
