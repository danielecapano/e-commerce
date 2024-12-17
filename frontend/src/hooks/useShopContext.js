import { createContext, useContext } from "react";

export const shopContext = createContext(null);
export const useShopContext = () => {
  const context = useContext(shopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};
