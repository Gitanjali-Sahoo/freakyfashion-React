import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ProductDetail from "./component/ProductDetail";
import SearchResults from "./component/SearchResults";
import ProductProvider from "./contexts/ProductProvider";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import ProductsList from "./admin/ProductsList";

const Paragraph = styled.p`
  text-align: center;
  background-color: #80808082;
  padding: 5px 0;
  color: #00000080;
`;

function App() {
  return (
    <>
      <ProductProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/search" element={<SearchResults />} />
          </Route>

          <Route element={<AdminLayout />} path="/admin">
            <Route element={<ProductsList />} path="products" />
          </Route>
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
