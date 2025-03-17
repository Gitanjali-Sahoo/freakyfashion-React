import React from "react";
import styled from "styled-components";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

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
  h2 {
    line-height: normal;
    margin-bottom: 0;
    text-align: center;
    font-size: 1.7rem;
  }
  h4 {
    letter-spacing: 0.4em;
    line-height: normal;
    margin-bottom: 0;
    text-align: center;
  }
  button {
    width: 100px;
    padding: 5px;
    background-color: #4d5798;
    color: white;
    font-weight: bold;
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
  form {
    margin-top: 1.5em;
    min-width: 300px;
  }
  input[type="search"] {
    border: none;
    padding: 7px;
    outline: none;
    width: 100%;
    flex: auto;
    border-radius: 8px;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 0.9rem;
    }
  }
`;

const Hero = () => {
  return (
    //     // src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     // src="https://images.pexels.com/photos/2989593/pexels-photo-2989593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //     src="https://images.pexels.com/photos/1750564/pexels-photo-1750564.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"

    <HeroWrapper>
      <h2>Step Into Style</h2>
      <h4>Comfort Meets Fashion in Every Pair</h4>
      <form action="">
        <input type="search" name="search" placeholder="Search product..." />
      </form>
      <p>Scroll Down</p>
      <a href="/">
        <FaRegArrowAltCircleDown />
      </a>
    </HeroWrapper>
  );
};

export default Hero;
