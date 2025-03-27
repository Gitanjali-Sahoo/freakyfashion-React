import React from "react";
import styled from "styled-components";
import Icons from "./Icons";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaSquareTwitter } from "react-icons/fa6";

const Wrapper = styled.div`
  background-color: #122b2d;
  color: white;
  margin-top: 2em;
  p {
    text-align: center;
    font-weight: bold;
    background-color: black;
    color: white;
    padding: 0.5em 0;
  }
`;
const Container = styled.div`
  display: flex;
  padding: 2em 1em;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
const FooterWrapper = styled.div`
  display: flex;

  align-items: center;
  gap: 2em;
  line-height: 1.9;
  font-weight: bold;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const FooterIcon = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
  svg {
    font-size: 25px;
  }
`;
const IconWrapper = styled.div`
  /* flex: 20%; */
`;
const Footer = () => {
  return (
    <>
      <Icons />
      <Wrapper>
        <Container>
          <FooterWrapper>
            <ul>
              <li>Shopping</li>
              <li>Winter Shoes</li>
              <li>Summer Shoes</li>
            </ul>

            <ul>
              <li>My Page</li>
              <li>My Order</li>
              <li>My Account</li>
            </ul>
            <ul>
              <li>Customer Care</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </FooterWrapper>
          <IconWrapper>
            <h1>Follow Us</h1>
            <FooterIcon>
              <FaFacebookSquare />
              <FaInstagram />
              <FaSquareTwitter />
              <FaLinkedin />
            </FooterIcon>
          </IconWrapper>
        </Container>
        <div>
          <p>© 2025 Freaky Fashion. All rights reserved.</p>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
