import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import ProductProvider from "../contexts/ProductProvider";

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 2em;
  margin-top: 2em;
  border: 1px solid grey;
  .icon {
    font-size: 1em;
    color: grey;
    &:hover {
      color: #ff6347;
      cursor: pointer;
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const ContentWrapper = styled.div`
  flex: 1;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    padding: 8px 15px;
    background-color: #0f3c30;
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    &:hover {
      background-color: #49796d;
    }
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 400px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
const ProductDetail = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch the product with id");
        }
        return resp.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        throw new Error(`Error from the server ${err}`);
      });
  }, [id]);

  return (
    <>
      <DetailWrapper>
        <ImageContainer>
          <img src={product.image} alt="product-image" />
        </ImageContainer>

        <ContentWrapper>
          <Content>
            <div style={{ lineHeight: "1.5" }}>
              <h5>{product.name}</h5>
              <h5>{product.price} Sek</h5>
              <h6>Gender: {product.gender}</h6>
            </div>

            <FaRegHeart className="icon" />
          </Content>
          <button>Add to Cart</button>
        </ContentWrapper>
      </DetailWrapper>
      <ProductProvider>
        <ImageSlider />
      </ProductProvider>
    </>
  );
};

export default ProductDetail;
