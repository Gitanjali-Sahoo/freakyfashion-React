import React from "react";
import styled from "styled-components";

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
  return (
    <div style={{ height: "70vh" }}>
      <Container>
        <Title>Thank you for your purchase!</Title>
        <p>An order confirmation has been sent to your email</p>

        <Button onClick={() => (window.location.href = "/")}>
          Back to Homepage
        </Button>
      </Container>
    </div>
  );
};

export default Confirmation;
