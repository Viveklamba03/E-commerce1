import React from "react";
import { useCart } from "../../context/CartContext";
import "./style.css";

const Cart = () => {
  const { cartItems, addToCart, decreaseQty } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <section className="cart-items">
      <div className="container d_flex">
        {cartItems.length === 0 ? (
          <h1 className="no-items product">No items added to cart</h1>
        ) : (
          <>
            {/* Cart Items Section */}
            <div className="cart-details">
              {cartItems.map((item) => {
                const productTotal = item.price * item.qty;
                return (
                  <div className="cart-list product d_flex" key={item.id}>
                    <div className="img">
                      <img src={item.cover} alt={item.name} />
                    </div>
                    <div className="cart-details">
                      <h3>{item.name}</h3>
                      <h4>
                        ${item.price}.00 × {item.qty}
                        <span>= ${productTotal}.00</span>
                      </h4>
                    </div>
                    <div className="cart-items-function">
                      <div className="cartControl d_flex">
                        <button
                          className="incCart"
                          onClick={() => addToCart(item)}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        <button
                          className="desCart"
                          onClick={() => decreaseQty(item)}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cart Total Section */}
            <div className="cart-total product">
              <h2>Cart Summary</h2>
              <div className="d_flex">
                <h4>Total Price:</h4>
                <h3>${totalPrice}.00</h3>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;


