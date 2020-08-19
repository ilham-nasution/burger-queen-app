import React, { useState } from "react";
import Header from "./components/Header";
import "./style.scss";
import Burger from "./components/Burger";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";

const initialState = {
  meat: 0,
  cheese: 0,
};

const App = () => {
  const [value, setValue] = useState(initialState);
  const [order, setOrder] = useState([]);

  const handleMeatPlusBtn = () => {
    if (value.meat < 3) {
      setValue((prevValue) => ({
        ...prevValue,
        meat: value.meat + 1,
      }));
    }
  };

  const handleMeatMinusBtn = () => {
    setValue((prevValue) => ({
      ...prevValue,
      meat: Math.max(0, value.meat - 1),
    }));
  };

  const handleCheesePlusBtn = () => {
    if (value.cheese < 3) {
      setValue((prevValue) => ({
        ...prevValue,
        cheese: value.cheese + 1,
      }));
    }
  };

  const handleCheeseMinusBtn = () => {
    setValue((prevValue) => ({
      ...prevValue,
      cheese: Math.max(0, value.cheese - 1),
    }));
  };

  const handleOrder = (event) => {
    event.preventDefault();
    setOrder((prevValue) => [...prevValue, value]);
    setValue(initialState);
  };

  return (
    <>
      <Header order={order} />
      <Container>
        <div className="center">
          <div>
            <Burger meat={value.meat} cheese={value.cheese} />
            <Menu
              meat={value.meat}
              cheese={value.cheese}
              cheeseMinusBtn={handleCheeseMinusBtn}
              meatMinusBtn={handleMeatMinusBtn}
              cheesePlusBtn={handleCheesePlusBtn}
              meatPlusBtn={handleMeatPlusBtn}
              order={handleOrder}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default App;
