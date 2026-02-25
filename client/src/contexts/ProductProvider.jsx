import React, { useEffect, useState } from "react";
import { API_URL } from "../config";

export const ProductContext = React.createContext([]);

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch products");
        }
        return resp.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ data, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
