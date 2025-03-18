import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch, IoCart, IoClose } from "react-icons/io5";
import { RiHeartLine } from "react-icons/ri";
import SearchBar from "./SearchBar";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
  background: white;
  z-index: 1000;
  svg {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    svg {
      font-size: 18px;
    }
  }
`;

const Logo = styled(Link)`
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  color: black;

  &:hover {
    color: #ff6347;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.6em;
    }
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const LinkWrapper = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: calc(10% + 49px);
    right: 0;
    width: 40%;
    background: #d3d3d3;
    padding: 1rem 0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: #ff6347;
  }
`;

const IconWrapper = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  align-items: center;
  @media (min-width: 1024px) {
    /* form {
      position: fixed;
      top: calc(10% + 4px);
      right: 5px;
    } */
  }
  @media (max-width: 640px) {
    form {
      position: fixed;
      right: 5px;
      top: calc(1% + 36px);
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <NavbarWrapper>
      <Logo to="/">
        <h1>freakyfashion</h1>
      </Logo>

      {/* Navigation Links */}
      <LinkWrapper open={menuOpen}>
        <li>
          <StyledLink to="/men">Men</StyledLink>
        </li>
        <li>
          <StyledLink to="/women">Women</StyledLink>
        </li>
        <li>
          <StyledLink to="/sale">Sale</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">Contact</StyledLink>
        </li>
      </LinkWrapper>

      {/* Icons */}
      <IconWrapper>
        {show && (
          // <form action="">
          //   <input
          //     type="search"
          //     name="search"
          //     placeholder="Search product..."
          //   />
          // </form>
          <SearchBar />
        )}
        <IoSearch onClick={() => setShow(!show)} />

        <li>
          <StyledLink to="/cart">
            <IoCart />
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/wishlist">
            <RiHeartLine />
          </StyledLink>
        </li>
        <li>
          {" "}
          <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </MenuToggle>
        </li>
      </IconWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
