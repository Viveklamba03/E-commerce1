import React from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./common/header/Header";

import Footer from "./common/footer/Footer.jsx";
import Cart from "./common/Cart/Cart.jsx";
import Contact from "./components/contact/contact.js";
import About from "./components/about/about.js";
import "./App.css";
import Data from "./components/Data";
import Sdata from "./components/MainPage/Sdata";

// 🏠 Main Pages
import Pages from "./pages/Pages";


function App() {
  const { productItems } = Data;
  const  shopItems = Sdata;
  console.log(Sdata)

  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/" 
            element={<Pages productItems={productItems} shopItems={shopItems} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
