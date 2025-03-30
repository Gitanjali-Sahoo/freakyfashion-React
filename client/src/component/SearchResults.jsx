import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import CardItem from "./CardItem";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em;
  margin: 0.6em;
  justify-content: center;
  align-items: center;
  justify-items: center;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 640px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SearchResults = () => {
  const location = useLocation();
  const filteredProducts = location.state?.filteredProducts || [];

  return (
    <div style={{ height: "70vh" }}>
      {filteredProducts.length === 0 ? null : (
        <CardWrapper>
          {filteredProducts.map((product) => (
            <CardItem product={product} key={product.id} />
          ))}
        </CardWrapper>
      )}
    </div>
  );
};

export default SearchResults;
