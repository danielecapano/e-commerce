/* eslint-disable react/prop-types */

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ProductContext } from "../hooks/useProductContext";

export const ProductProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Fetch per tutti i prodotti
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(`${backendUrl}/products`);
      return res.data.products.reverse();
    },

    staleTime: 60000, // I dati rimangono validi per 60 secondi
    cacheTime: 300000, // I dati sono mantenuti nella cache per 5 minuti
  });

  // Funzione per ottenere un prodotto specifico
  const getProductById = async (id) => {
    const product = queryClient.getQueryData(["product", id]); // Verifica la cache
    if (!product) {
      const { data } = await axios.get(`${backendUrl}/product/${id}`);
      queryClient.setQueryData(["product", id], data.product); // Aggiorna la cache
      return data.product;
    }
    return product;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        isError,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
