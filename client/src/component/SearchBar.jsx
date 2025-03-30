import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import styled from "styled-components";

const Input = styled.input`
  background-color: #c5e9f4;
  border: none;
  padding: 4px;
  outline: none;
`;
const Button = styled.button`
  color: white;
  font-weight: bold;
  background-color: #0f3c30;
  padding: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #49796d;
  }
`;
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { data } = useContext(ProductContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const searchQuery = query
      .toLowerCase()
      .split(",")
      .map((term) => term.trim())
      .filter(Boolean);

    const filteredData = data.filter((product) => {
      const productName = product.name.toLowerCase();
      const productGender = product.gender.toLowerCase();

      return searchQuery.some(
        (term) => productName.includes(term) || productGender === term
      );
    });
    setQuery("");
    navigate(`/search?search=${query}`, {
      state: { filteredProducts: filteredData },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
