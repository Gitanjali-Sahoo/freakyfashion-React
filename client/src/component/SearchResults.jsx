import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em;
  margin: 0.6em;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 640px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const location = useLocation(); // Get the current URL

  // Extract search query from URL
  const params = new URLSearchParams(location.search);
  const query = params.get("search") || "";

  useEffect(() => {
    if (!query.trim()) return;

    fetch(`/api/search?search=${query}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data.productsVisible || []);
        setMessage(data.message || "");
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [query]);

  return (
    <div>
      {message && <p>{message}</p>}
      <CardWrapper>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} width="50" />

              <p>
                {product.name} - {product.price} SEK
              </p>
            </Link>
          </li>
        ))}
      </CardWrapper>
    </div>
  );
};

export default SearchResults;
