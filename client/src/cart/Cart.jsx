import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
`;
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
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Icon = styled.div`
  padding: 4px;
  cursor: pointer;
`;
const Button = styled.button`
  padding: 8px 20px;
  background-color: #0f3c30;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  margin: auto 50%;
  font-size: 16px;
  width: 50%;
  &:hover {
    background-color: #49796d;
  }
`;

const Cart = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
  const total = products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );
  const handleDelete = (id) => {
    fetch(`/api/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Product deleted successfully!");
          setProducts(products.filter((product) => product.id !== id));
        } else {
          alert("Failed to delete product.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  const handleClick = () => {
    if (products.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout", { state: { products, total } });
  };

  return (
    <Wrapper>
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
                  value={product.quantity || 1}
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
              <td>{product.quantity * Number(product.price)} Sek</td>
              <td>
                <Icon onClick={() => handleDelete(product.id)}>
                  <FaRegTrashAlt />
                </Icon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Display Total Price */}
      <h3 style={{ marginBottom: "1em" }}>Total: {total} SEK</h3>
      <Button onClick={handleClick}>Checkout</Button>
    </Wrapper>
  );
};

export default Cart;
