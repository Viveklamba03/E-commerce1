import { createContext, useContext, useState } from "react";
import Ddata from "../components/discount/Ddata";
import Sdata from "../components/MainPage/Sdata";
import Data from "../components/Data";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const {productItems} = Data;
  const shopItems = Sdata;

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (!exist) return;

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };


  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseQty, shopItems, productItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
