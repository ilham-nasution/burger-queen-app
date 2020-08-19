import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Menu = (props) => {
  return (
    <Form onSubmit={props.order}>
      <Form.Group as={Row}>
        <Form.Label className="text-primary" column sm="2">
          Meat
        </Form.Label>
        <Col xs={8} sm={7}>
          <Form.Control readOnly name="meat" value={props.meat} />
        </Col>
        <Col>
          <Button onClick={props.meatPlusBtn} variant="outline-primary">
            +
          </Button>
        </Col>
        <Col>
          <Button onClick={props.meatMinusBtn} variant="outline-primary">
            -
          </Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label className="text-primary" column sm="2">
          Cheese
        </Form.Label>
        <Col xs={8} sm={7}>
          <Form.Control readOnly name="cheese" value={props.cheese} />
        </Col>
        <Col>
          <Button onClick={props.cheesePlusBtn} variant="outline-primary">
            +
          </Button>
        </Col>
        <Col>
          <Button onClick={props.cheeseMinusBtn} variant="outline-primary">
            -
          </Button>
        </Col>
      </Form.Group>
      <div className="text-center">
        <Button
          variant="primary"
          type="submit"
          block
          disabled={(props.meat || props.cheese) === 0}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default Menu;
