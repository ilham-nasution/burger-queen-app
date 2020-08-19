import React from "react";
import { Modal, Button } from "react-bootstrap";

const Cart = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.order.map((o) => (
          <div className="row justify-content-between align-items-center px-2">
            <div>
              <h5>Burger</h5>
              <p>
                with {o.meat} meat and {o.cheese} cheese
              </p>
            </div>
            <p>x1</p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
