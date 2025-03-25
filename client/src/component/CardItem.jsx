import React from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdFiberNew } from "react-icons/md";

const CardItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 1px solid #ddd;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
  .icon {
    position: absolute;
    right: 0.7em;
    bottom: 0.7em;
    font-size: 1.3em;
    color: grey;
    &:hover {
      color: #ff6347;
      cursor: pointer;
    }
  }
  .badge-icon {
    position: absolute;
    left: 2px;
    color: grey;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: #ff6347;
  }
`;
const CardItem = ({ product }) => {
  return (
    <>
      <CardItemWrapper>
        <ImageWrapper>
          <img src={product.image} alt="product-image" />
          <FaRegHeart className="icon" />
          {product.isNew ? (
            <MdFiberNew className="badge-icon" size={40} />
          ) : null}
        </ImageWrapper>
        <StyledLink to={`/products/${product.id}`}>
          <div>{product.name}</div>
          <div>{product.price} Sek</div>
        </StyledLink>
      </CardItemWrapper>
    </>
  );
};

export default CardItem;
