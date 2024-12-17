import { createContext, useContext } from "react";

export const adminContext = createContext(null);
export const useAdminContext = () => {
  const context = useContext(adminContext);
  if (!context) {
    throw new Error(
      "useAdminContext must be used within a AdminContextProvider"
    );
  }
  return context;
};
