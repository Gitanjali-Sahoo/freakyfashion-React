// import React from "react";
// import styled from "styled-components";
// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 2em;

//   img {
//     width: 400px;
//     border-radius: 8px;
//   }
// `;
// const ConfirmationPage = () => {
//   return (
//     <Wrapper>
//       <h1>Your order has been placed Successfully</h1>
//       <img
//         src="https://images.pexels.com/photos/7564249/pexels-photo-7564249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         alt=""
//       />
//     </Wrapper>
//   );
// };

// export default ConfirmationPage;

import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  color: #0f3c30;
`;

const OrderDetails = styled.div`
  margin: 20px 0;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;

const Total = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #0f3c30;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #49796d;
  }
`;

const Confirmation = () => {
  // const location = useLocation();
  // const { customer, products, total } = location.state || {}; // Get order details from Checkout page

  return (
    <Container>
      <Title>Thank you for your purchase!</Title>
      <p>An order confirmation has been sent to your email</p>

      <OrderDetails>
        <h3>Order Details</h3>
        {/* {products.map((product, index) => (
          <OrderItem key={index}>
            <span>
              {product.name} (x{product.quantity})
            </span>
            <span>{product.quantity * product.price} SEK</span>
          </OrderItem>
        ))}
        <Total>Total: {total} SEK</Total> */}
      </OrderDetails>

      <Button onClick={() => (window.location.href = "/")}>
        Back to Homepage
      </Button>
    </Container>
  );
};

export default Confirmation;
