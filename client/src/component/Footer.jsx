import React from "react";
import styled from "styled-components";
import Icons from "./Icons";

const Wrapper = styled.div`
  background-color: #e0e0e0;
  margin-top: 2em;
  p {
    text-align: center;
    font-weight: bold;
    background-color: black;
    color: white;
    padding: 0.5em 0;
  }
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2em;
  width: 100%;
  padding: 2em 0;
  line-height: 1.9;
  font-weight: bold;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Footer = () => {
  return (
    <>
      <Icons />
      <Wrapper>
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
        <div>
          <p>© 2025 Freaky Fashion. All rights reserved.</p>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
