import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const { data } = useContext(ProductContext);

  // if (loading) {
  //   return <p>Loading products...</p>;
  // }
  // if (error) {
  //   return <p>Error: {error}</p>;
  // }
  // if (!data || data.length === 0) {
  //   return <p>No products available.</p>;
  // }
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
    // setFilteredProducts(filteredData);
    setQuery("");
    navigate(`/search?search=${query}`, {
      state: { filteredProducts: filteredData },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
