import React from "react";
import CardItem from "./CardItem";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em;
  margin: 0.6em;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    justify-self: center;
  }
  @media screen and (min-width: 640px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Card = () => {
  const { data, loading, error } = useContext(ProductContext);

  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!data || data.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <CardWrapper>
      {data.map((product) => (
        <CardItem product={product} key={product.id} />
      ))}
    </CardWrapper>
  );
};

export default Card;
