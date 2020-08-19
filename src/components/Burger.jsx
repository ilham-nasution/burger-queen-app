import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Burger.css";

const Burger = ({ meat, cheese }) => {
  return (
    <div className="Burger">
      <div className="BreadTop"></div>
      <TransitionGroup>
        {[...Array(cheese)].map((_, i) => (
          <CSSTransition key={i} timeout={500} classNames="animation">
            <div className="Cheese"></div>
          </CSSTransition>
        ))}
        {[...Array(meat)].map((_, i) => (
          <CSSTransition key={i} timeout={500} classNames="animation">
            <div key={i} className="Meat"></div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;
