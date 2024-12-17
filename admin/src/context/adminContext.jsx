/* eslint-disable react/prop-types */
import { useState } from "react";
import { adminContext } from "../hook/useAdminContext";

import axios from "axios";

const AdminContextProvider = ({ children }) => {
  const currency = "€";
  const [sizes, setSizes] = useState([]);
  const [numberShoes, setNumberShoes] = useState([]);
  const initialStateError = {
    name: "",
    brand: "",
    category: "",
    sector: "",
    price: "",
    sizes: "",
    numberShoes: "",
    images: "",
    discount: "",
  };
  const [checkboxes, setCheckboxes] = useState({
    S: false,
    M: false,
    L: false,
    XL: false,
    XXL: false,
  });
  const [shoesCheckboxes, setShoesCheckboxes] = useState({
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
    35: false,
    36: false,
    37: false,
    38: false,
    39: false,
    40: false,
    41: false,
    42: false,
    43: false,
    44: false,
  });
  const [error, setError] = useState(initialStateError);
  const [token, setToken] = useState(localStorage.getItem("token") ?? null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const getPrice = (price, discount) =>
    (price - price * (discount / 100)).toFixed(2);

  const addProduct = async (product) => {
    try {
      const response = await axios.post(`${backendUrl}/api/product`, product, {
        headers: {
          token,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/products`);
      console.log(response.data.products);
      return response.data.products;
    } catch (error) {
      console.error("Error view products:", error);
      throw error;
    }
  };

  const getProductById = async (productId) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/product/${productId}`
      );
      return response.data.product;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProductById = async (productId) => {
    try {
      const response = await axios.delete(
        `${backendUrl}/api/product/${productId}`,
        {
          headers: {
            token,
          },
        }
      );
      return response.data.product;
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    currency,
    sizes,
    setSizes,
    checkboxes,
    setCheckboxes,
    numberShoes,
    setNumberShoes,
    shoesCheckboxes,
    setShoesCheckboxes,
    error,
    setError,
    initialStateError,
    token,
    setToken,
    backendUrl,
    addProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    getPrice,
  };

  return (
    <adminContext.Provider value={value}>{children}</adminContext.Provider>
  );
};
export default AdminContextProvider;
