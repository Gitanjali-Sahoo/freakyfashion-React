import React from "react";
import Sidebar from "../component/Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductsList = () => {
  return (
    <Wrapper>
      <Sidebar />
      <div>
        <form action="">
          <input type="text" name="" id="" />
        </form>
      </div>
    </Wrapper>
  );
};

export default ProductsList;
