import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

const Table = styled.table`
  margin: 40px auto;
  width: 700px;
  border: 1px solid black;
  border-collapse: collapse;

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
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    fetch("/api/cart")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
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
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                />
              </td>
              <td>
                <Icon onClick={() => handleDelete(product.id)}>
                  <FaRegTrashAlt />
                </Icon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
