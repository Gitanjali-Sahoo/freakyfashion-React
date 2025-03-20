import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import { Link } from "react-router-dom";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80%;
  margin: auto;
  overflow: hidden;
  @media (max-width: 640px) {
    display: none;
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.$translateX}%);
`;

const Slide = styled.div`
  flex: 0 0 33.33%;
  padding: 10px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;

  &:hover {
    color: gray;
  }

  ${({ $left }) => $left && `left: 0;`}
  ${({ $right }) => $right && `right: 0;`}
`;

const ImageSlider = () => {
  const { data, loading, error } = useContext(ProductContext);
  const [index, setIndex] = useState(0);

  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!data || data.length === 0) {
    return <p>No products available.</p>;
  }

  const itemsPerSlide = 3;
  const maxIndex = data.length - itemsPerSlide;

  const nextSlide = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <SliderContainer>
      <NavButton $left onClick={prevSlide}>
        <FaChevronLeft />
      </NavButton>
      <SlideWrapper $translateX={-index * (100 / itemsPerSlide)}>
        {data.map((product) => (
          <Slide key={product.id}>
            <Image src={product.image} alt={product.name} />
            <Link to={`/products/${product.id}`}>
              <p>
                <strong>{product.name}</strong>
              </p>
              <p>{product.price} Sek</p>
            </Link>
          </Slide>
        ))}
      </SlideWrapper>
      <NavButton $right onClick={nextSlide}>
        <FaChevronRight />
      </NavButton>
    </SliderContainer>
  );
};

export default ImageSlider;
