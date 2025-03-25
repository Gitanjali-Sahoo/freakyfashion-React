import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.h1`
  background-color: #000000c9;
  padding: 15px;
  color: white;
`;
const AdminLayout = () => {
  return (
    <>
      <Header>Administration</Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
