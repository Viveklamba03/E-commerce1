import React, { useState } from "react";
import Home from "../components/MainPage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";
import { useCart } from "../context/CartContext";

const Pages = ({ productItems, shopItems }) => {
  // 🛒 Cart state
 console.log(shopItems)
 const { cartItems, addToCart, decreaseQty } = useCart();
  return (
    <>
      <Home />
      {/* ✅ pass addToCart to FlashDeals */}
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      {/* ✅ also pass addToCart to Shop */}
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  );
};

export default Pages;


