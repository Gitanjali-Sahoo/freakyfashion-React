import React from "react";
import Card from "../component/Card";
import ProductProvider from "../contexts/ProductProvider";
import Hero from "../component/Hero";
import SpotCard from "../component/SpotCard";
import SearchResults from "../component/SearchResults";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <SpotCard />

      <SearchResults />

      <ProductProvider>
        <Card />
      </ProductProvider>
    </>
  );
};

export default Home;
