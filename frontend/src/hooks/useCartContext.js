import { createContext, useContext } from "react";

export const cartContext = createContext(null);
export const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a ShopContextProvider");
  }
  return context;
};
