import React from "react";
import "./about.css";

export default function AboutUs() {
  return (
    <div className="about-container">
      {/* Header */}
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to Bonik — your one-stop destination for all your shopping
          needs. We’re here to bring you the best products at the best prices.
        </p>
      </div>

      {/* Content */}
      <div className="about-content">
        {/* Image */}
        <div className="about-image">
          <img
            src='./images/banner-2.png'
            alt="About Bonik"
          />
        </div>

        {/* Text */}
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Bonik is a leading online store offering a wide range of products,
            from fashion and electronics to home essentials and more. Our
            mission is to make online shopping simple, convenient, and
            enjoyable for everyone.
          </p>

          <h2>Our Mission</h2>
          <p>
            We strive to deliver high-quality products at competitive prices,
            with exceptional customer service to ensure a smooth shopping
            experience every time.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Wide range of quality products</li>
            <li>✔ Affordable prices</li>
            <li>✔ Fast & reliable delivery</li>
            <li>✔ Excellent customer support</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="about-bottom">
        <h2>Our Values</h2>
        <p>
          At Bonik, we believe in integrity, customer satisfaction, and
          continuous improvement. We’re committed to making your shopping
          journey enjoyable and stress-free.
        </p>
      </div>
    </div>
  );
}
