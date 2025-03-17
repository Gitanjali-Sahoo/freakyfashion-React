import React from "react";
import Card from "../component/Card";
import ProductProvider from "../contexts/ProductProvider";
import Hero from "../component/Hero";
import SpotCard from "../component/SpotCard";

const Home = () => {
  return (
    <>
      <Hero />
      <SpotCard />
      <ProductProvider>
        <Card />
      </ProductProvider>
    </>
  );
};

export default Home;
