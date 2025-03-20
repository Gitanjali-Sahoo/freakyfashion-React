import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <header>Administration</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
