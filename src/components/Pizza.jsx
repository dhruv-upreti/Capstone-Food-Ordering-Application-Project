import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <h1>{pizza.name}</h1>
      <img src={pizza.image} className="img-fluid" style={{ height: "200px", width: "200px" }} onClick={handleShow} />

      <div className="flex-container">
        <div className="w-100 p-100">
          <p>Variants</p>
          <select
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {pizza.variants &&
              pizza.variants.map((variant) => {
                return <option value={variant}>{variant}</option>;
              })}
          </select>
        </div>

        <div className="w-100">
          <p>Quantity</p>
        </div>

        <select
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        >
          {[...Array(9).keys()].map((x, i) => {
            return <option value={i + 1}> {i + 1}</option>;
          })}
        </select>
      </div>

      <div className="flex-container">
        <div>
          <h1>Price: {pizza.prices[0][variant] * quantity} Rs/-</h1>
        </div>

        <div>
          <button className="btn">
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>{pizza.name}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <img src={pizza.image} className="img-fluid" style={{ height: "400px" }} />
          <p>{pizza.description}</p>
        </ModalBody>
        <ModalFooter>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
