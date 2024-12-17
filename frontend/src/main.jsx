import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ShopContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ShopContextProvider>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
