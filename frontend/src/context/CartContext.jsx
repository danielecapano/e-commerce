/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import { cartContext } from "../hooks/useCartContext";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addProduct":
      const productExists = state.find(
        (product) =>
          product.id === action.payload.id &&
          (product.size === action.payload.size || product.size == null) &&
          (product.number === action.payload.number || product.number == null)
      );

      if (productExists) {
        // Se esiste, aggiorna solo la quantità
        return state.map((product) =>
          product.id === action.payload.id &&
          (product.size === action.payload.size || product.size == null) &&
          (product.number === action.payload.number || product.number == null)
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product
        );
      } else {
        // Se non esiste, aggiungi il prodotto
        return [...state, action.payload];
      }
    case "removeProduct":
      return state.filter(
        (product) =>
          product.id !== action.payload.id ||
          (product.size !== action.payload.size &&
            action.payload.size != null) ||
          (product.number !== action.payload.number &&
            action.payload.number != null)
      );
    case "addQuantity":
      return state.map((product) => {
        const matches =
          product.id === action.payload.id &&
          (action.payload.size === null ||
            product.size === action.payload.size) &&
          (action.payload.number === null ||
            product.number === action.payload.number);

        return matches
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
    case "removeQuantity":
      return state.map((product) =>
        product.id === action.payload.id &&
        (product.size === action.payload.size || action.payload.size == null) &&
        (product.number === action.payload.number ||
          action.payload.number == null)
          ? {
              ...product,
              quantity:
                product.quantity > 1 ? product.quantity - 1 : product.quantity,
            }
          : product
      );
    case "resetCart":
      return [];
    default:
      throw new Error(`Azione non gestita: ${action.type}`);
  }
};

const CartContextProvider = ({ children }) => {
  const [productsInCart, dispatch] = useReducer(cartReducer, []);
  const cartLength = productsInCart.length;
  const shippingFee = 10;
  const currency = "€";
  const subtotal =
    productsInCart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) ||
    0;
  const totalQuantity =
    productsInCart.reduce((acc, curr) => acc + curr.quantity, 0) || 0;

  const total = subtotal + shippingFee || 0;
  const [orders, setOrders] = useState([]);

  return (
    <cartContext.Provider
      value={{
        productsInCart,
        cartLength,
        currency,
        subtotal,
        total,
        totalQuantity,
        shippingFee,
        orders,
        setOrders,
        dispatch,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
