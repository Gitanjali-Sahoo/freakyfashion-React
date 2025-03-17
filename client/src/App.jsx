import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ProductDetail from "./component/ProductDetail";

const Paragraph = styled.p`
  text-align: center;
  background-color: #80808082;
  padding: 5px 0;
  color: #00000080;
`;

function App() {
  return (
    <>
      <header>
        {/* <Paragraph>
          Free Express Shipping on all orders with all duties included
        </Paragraph> */}
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
