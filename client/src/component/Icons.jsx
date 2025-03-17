import React from "react";
import { FaGlobeAfrica, FaRegSmile, FaShieldAlt } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 4em 0 1em 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em;
  svg {
    font-size: 25px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    justify-items: flex-start;
    margin-left: 2em;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;
const Icons = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <FaGlobeAfrica />
        <h4>Gratis frakt och returer</h4>
      </IconWrapper>
      <IconWrapper>
        <MdOutlineFlight />
        <h4>Expressfrakt</h4>
      </IconWrapper>
      <IconWrapper>
        <FaShieldAlt />
        <h4>Säkra betalningar</h4>
      </IconWrapper>
      <IconWrapper>
        <FaRegSmile />
        <h4>Nyheter varje dag</h4>
      </IconWrapper>
    </Wrapper>
  );
};

export default Icons;
