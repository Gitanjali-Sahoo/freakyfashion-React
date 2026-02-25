import React from "react";
import styled from "styled-components";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import SearchBar from "./SearchBar";

const HeroWrapper = styled.div`
  background: linear-gradient(rgb(20 20 20 / 73%), rgb(28 28 29 / 50%)),
    url(https://images.pexels.com/photos/2989593/pexels-photo-2989593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
      center center;
  background-size: cover;
  color: white;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    line-height: normal;
    margin-bottom: 0;
    text-align: center;
    font-size: 3em;
  }
  h4 {
    letter-spacing: 0.4em;
    line-height: normal;
    margin: 1em;
    text-align: center;
  }

  a {
    color: white;
    text-decoration: none;
  }
  p {
    font-size: 0.8rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.9rem;
    }
    h4 {
      font-size: 0.9rem;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <h1>Step Into Style</h1>
      <h4>Comfort Meets Fashion in Every Pair</h4>

      <SearchBar />
      <p>Scroll Down</p>
      <a href="/">
        <FaRegArrowAltCircleDown />
      </a>
    </HeroWrapper>
  );
};

export default Hero;
