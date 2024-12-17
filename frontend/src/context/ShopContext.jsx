/* eslint-disable react/prop-types */
import { useState } from "react";
import { policies, filters } from "../assets/assets";
import { shopContext } from "../hooks/useShopContext";
import axios from "axios";

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [status, setStatus] = useState(null);
  const currency = "€";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const categoriesList = [
    "T-shirt",
    "Felpe",
    "Giacche",
    "Cappotti",
    "Pantaloni",
    "Jeans",
    "Maglioni",
    "Camicie",
    "Gonne",
    "Vestiti",
    "Scarpe",
    "Accessori",
  ];
  const sectorsList = ["Uomo", "Donna", "Bambino"];

  const getAllProducts = async () => {
    try {
      setStatus("loading");
      const res = await axios.get(`${backendUrl}/products`);
      console.log(res.data.products.reverse());
      setProducts(res.data.products);
      setFilterProducts(res.data.products);
      console.log(products);
      setStatus("ready");
    } catch (error) {
      console.log(error);
      setStatus("Error");
    }
  };

  const getProductById = async (productId) => {
    try {
      setStatus("loading");
      const res = await axios.get(`${backendUrl}/product/${productId}`);
      const product = res.data.product;

      setStatus("ready");
      return product;
    } catch (error) {
      console.log(error);
      setStatus("Error");
    }
  };

  const getPrice = (price, discount) =>
    (price - price * (discount / 100)).toFixed(2);
  const value = {
    status,
    setStatus,
    products,
    filterProducts,
    setFilterProducts,
    setProducts,
    getAllProducts,
    getProductById,
    policies,
    filters,
    currency,
    backendUrl,
    search,
    setSearch,
    isSearchOpen,
    setIsSearchOpen,
    categoriesList,
    sectorsList,
    getPrice,
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;
