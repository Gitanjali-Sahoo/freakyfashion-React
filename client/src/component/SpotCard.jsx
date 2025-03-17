import React from "react";
import styled from "styled-components";

const SpotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0.6em;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const ItemWrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 300px;
    filter: brightness(50%);
  }
  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
    color: white;
    font-size: 1.5em;
  }
`;
const SpotCard = () => {
  return (
    <SpotWrapper>
      <ItemWrapper>
        <img
          src="https://images.pexels.com/photos/293406/pexels-photo-293406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h3>Men</h3>
      </ItemWrapper>
      <ItemWrapper>
        <img
          src="https://images.pexels.com/photos/27876437/pexels-photo-27876437/free-photo-of-sandalias.png?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt=""
        />
        <h3>Women</h3>
      </ItemWrapper>
      <ItemWrapper>
        <img
          src="https://images.pexels.com/photos/3026856/pexels-photo-3026856.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt=""
        />
        <h3>Kids</h3>
      </ItemWrapper>
    </SpotWrapper>
  );
};

export default SpotCard;
