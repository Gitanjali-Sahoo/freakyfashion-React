import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import styled from "styled-components";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  button {
    padding: 8px 10px;
    background-color: #0f3c30;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    &:hover {
      background-color: #49796d;
    }
  }
`;
const Container = styled.div`
  flex: 70%;
  height: 90vh;
`;
const ChildWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
`;
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

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { data, error, loading } = useContext(ProductContext);

  useEffect(() => {
    setProducts(data || []);
  }, [data]);

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
  if (loading) {
    return <p>Loading......</p>;
  }

  if (error) {
    return <p>Error loading products......</p>;
  }
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <ChildWrapper>
          <h3>Products</h3>

          <button>
            <StyledLink to="new">New Products</StyledLink>
          </button>
        </ChildWrapper>
        <Table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Sku</td>
              <td>Price</td>
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
                  <Icon onClick={() => handleDelete(product.id)}>
                    <FaRegTrashAlt />
                  </Icon>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Wrapper>
  );
};

export default ProductsList;
