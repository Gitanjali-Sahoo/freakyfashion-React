import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../component/Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  button {
    border: none;
    cursor: pointer;
  }
`;
const Container = styled.div`
  flex: 70%;
  margin: 20px 40px;
  button {
    padding: 8px 20px;
    background-color: #0f3c30;
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    margin-top: 1em;
    &:hover {
      background-color: #49796d;
    }
  }
`;

const Label = styled.label`
  display: block;
  padding: 8px 0px;
`;
const FormInput = styled.div`
  margin-bottom: 10px;
  margin-top: 0em;
`;

const NewProduct = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    fetch("/api/products/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      if (resp.ok) {
        alert("Product has added successfully");
        formRef.current.reset();
      }
    });
  };

  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <h2>New Products</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <FormInput>
            <Label>Name</Label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name..."
              required
              maxLength="25"
            />
          </FormInput>
          <FormInput>
            <Label>Price</Label>

            <input
              type="number"
              name="price"
              id="price"
              step="0.01"
              min="0"
              required
            />
          </FormInput>
          <FormInput>
            <Label>Photo</Label>

            <input name="image" type="text" id="image" required />
          </FormInput>
          <FormInput>
            <Label>SKU</Label>

            <input
              type="text"
              id="sku"
              name="sku"
              pattern="[A-Z]{3}[0-9]{3}"
              placeholder="Enter the SKU..."
              required
            />
          </FormInput>
          <FormInput>
            <Label>Description</Label>

            <textarea
              name="description"
              id="description"
              rows="10"
              cols="30"
              required
            ></textarea>
          </FormInput>
          <FormInput>
            <Label>Gender</Label>
            <input
              type="text"
              id="gender"
              name="gender"
              placeholder="Enter gender..."
              required
            />
          </FormInput>
          <FormInput>
            <Label>Date</Label>

            <input
              type="date"
              id="date"
              name="date"
              placeholder="Enter the Date..."
              required
            />
          </FormInput>
          <button type="submit">Add</button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default NewProduct;
