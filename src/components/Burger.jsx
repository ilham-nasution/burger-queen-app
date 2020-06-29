import React from "react";
import { slideInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./Burger.css";

const styles = {
  slideInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInRight, "slideInRight"),
  },
};

const Burger = (props) => {
  return (
    <StyleRoot>
      <div className="Burger">
        <div className="BreadTop"></div>
        {[...Array(props.cheese)].map((_, i) => (
          <div style={styles.slideInRight} className="Cheese"></div>
        ))}
        {[...Array(props.meat)].map((_, i) => (
          <div style={styles.slideInRight} className="Meat"></div>
        ))}
        <div className="BreadBottom"></div>
      </div>
    </StyleRoot>
  );
};

export default Burger;
