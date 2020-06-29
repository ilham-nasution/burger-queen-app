import React from "react";
import "./Burger.css";

const Burger = (props) => {
  return (
    <div className="Burger">
      <div className="BreadTop"></div>
      {[...Array(props.cheese)].map((_, i) => (
        <div className="Cheese"></div>
      ))}
      {[...Array(props.meat)].map((_, i) => (
        <div className="Meat"></div>
      ))}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;
