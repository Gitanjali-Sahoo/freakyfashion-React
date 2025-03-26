import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
`;
const Table = styled.table`
  margin: 40px auto;
  width: 700px;
  border: 1px solid black;
  border-collapse: collapse;
  input {
    width: 30px;
  }

  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
  }
  thead tr:nth-child(1) {
    background-color: #555454;
    color: white;
    font-weight: bold;
  }
  tbody tr:nth-child(1) {
    background-color: #bbbbbb;
  }
  tbody tr:nth-child(2) {
    background-color: #e9e9e9;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Icon = styled.div`
  padding: 4px;
  cursor: pointer;
`;
const Container = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

  @media (max-width: 640px) {
    padding: 15px;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
  margin-top: 1em;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 640px) {
    padding: 6px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const AddressBox = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;

  @media (max-width: 640px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0f3c30;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #49796d;
  }

  @media (max-width: 640px) {
    padding: 8px;
    font-size: 14px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-align: center;
`;
const Checkout = () => {
  const location = useLocation();
  const products = location.state.products;
  const total = location.state.total;
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.price} Sek</td>

              <td>
                {/* <button
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity - 1)
                  }
                >
                  -
                </button> */}
                {/* <input
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                /> */}
                <p>{product.quantity}</p>
                {/* <button
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity + 1)
                  }
                >
                  +
                </button> */}
              </td>
              <td>{product.quantity * Number(product.price)} Sek</td>
              <td>
                <Icon onClick={() => handleDelete(product.id)}>
                  <FaRegTrashAlt />
                </Icon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Total: {total} SEK</h3>
      <Container>
        <Title>Customer Data</Title>
        <form>
          <Row>
            <FormGroup>
              <Label>First Name</Label>
              <Input type="text" name="firstName" />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input type="text" name="lastName" />
            </FormGroup>
          </Row>

          <FormGroup>
            <Label>E-Mail</Label>
            <Input type="email" name="email" />
          </FormGroup>

          <AddressBox>
            <Label>Adress</Label>
            <FormGroup>
              <Label>Street</Label>
              <Input type="text" name="street" />
            </FormGroup>
            <Row>
              <FormGroup>
                <Label>Pincode</Label>
                <Input type="text" name="postalCode" />
              </FormGroup>
              <FormGroup>
                <Label>City</Label>
                <Input type="text" name="city" />
              </FormGroup>
            </Row>
          </AddressBox>

          <FormGroup>
            <input type="checkbox" name="" id="" />I want to receive newsletters
          </FormGroup>

          <Button type="submit">
            <StyledLink to="/confirmation">Köp</StyledLink>
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Checkout;
