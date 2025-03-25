import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Table = styled.table`
  margin: 40px auto;
  width: 700px;
  border: 1px solid black;
  border-collapse: collapse;
  input {
    width: 30px;
  }

  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
  }
  thead tr:nth-child(1) {
    background-color: #555454;
    color: white;
    font-weight: bold;
  }
  tbody tr:nth-child(1) {
    background-color: #bbbbbb;
  }
  tbody tr:nth-child(2) {
    background-color: #e9e9e9;
  }
`;
const Icon = styled.div`
  padding: 4px;
  cursor: pointer;
`;
const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/cart")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative quantities

    fetch("/api/cart/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, quantity: newQuantity }),
    })
      .then((res) => res.json())
      .then(() => {
        // Update local state after successful backend update
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, quantity: newQuantity } : product
          )
        );
      })
      .catch((error) => console.error("Error updating quantity:", error));
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.price} Sek</td>
              {/* <td>
                <input
                  type="number"
                  name="quantity"
                  value={quantities[product.id] || 1} // Get from quantities state
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                />
              </td> */}
              <td>
                <button
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity - 1)
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                />
                <button
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity + 1)
                  }
                >
                  +
                </button>
              </td>
              <td>{product.quantity * Number(product.price)}</td>
              <td>
                <Icon onClick={() => handleDelete(product.id)}>
                  <FaRegTrashAlt />
                </Icon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button>
        <Link to="/checkout">Checkout</Link>
      </button>
    </>
  );
};

export default Cart;
