import React from "react";
import "./Burger.css";

const Burger = ({ meat, cheese }) => {
  return (
    <div className="Burger">
      <div className="BreadTop"></div>
      {[...Array(cheese)].map((_, i) => (
        <div key={i} className="Cheese"></div>
      ))}
      {[...Array(meat)].map((_, i) => (
        <div key={i} className="Meat"></div>
      ))}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;
