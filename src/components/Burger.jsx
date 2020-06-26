import React, { Component } from "react";

export default class Burger extends Component {
  render() {
    return (
      <div style={{ height: "600px", position: "relative" }}>
        <img
          style={{
            position: "absolute",
            bottom: "320px",
            left: "-15px",
            zIndex: "3",
          }}
          width="710"
          src="burger-bun-png-transparent.png"
          alt=""
        />
        <img
          style={{
            position: "absolute",
            bottom: "170px",
            left: "0",
            zIndex: "2",
          }}
          width="650"
          src="slice-of-cheese-png-13-transparent.png"
          alt=""
        />
        <img
          style={{
            position: "absolute",
            bottom: "150px",
            left: "0",
            zIndex: "1",
          }}
          src="burger-patty-png-1-transparent.png"
          alt=""
        />
        <img
          style={{ position: "absolute", bottom: "0px", left: "0" }}
          src="burger-bun-png-7-transparent.png"
          alt=""
        />
      </div>
    );
  }
}
