import React from "react";
//Ecommerce ebsite
//2nd BRANCH 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./common/header/Header";

import Footer from "./common/footer/Footer.jsx";
import Cart from "./common/Cart/Cart.jsx";
import Contact from "./components/contact/contact.js";
import About from "./components/about/about.js";
import "./App.css";


// 🏠 Main Pages
import Pages from "./pages/Pages";


function App() {
  


  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/" 
            element={<Pages />}
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
