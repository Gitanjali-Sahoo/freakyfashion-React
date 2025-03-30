import React from "react";
import Card from "../component/Card";
import Hero from "../component/Hero";
import SpotCard from "../component/SpotCard";
import SearchResults from "../component/SearchResults";

const Home = () => {
  return (
    <>
      <Hero />
      <SpotCard />
      <SearchResults />
      <Card />
    </>
  );
};

export default Home;
