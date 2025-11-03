import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
 
import Data from "../Data"; 
import { addToCart } from "../../redux/cartslice";

const SampleNextArrow = ({ onClick }) => (
  <div className="control-btn" onClick={onClick}>
    <button className="next">
      <i className="fa fa-long-arrow-alt-right"></i>
    </button>
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div className="control-btn" onClick={onClick}>
    <button className="prev">
      <i className="fa fa-long-arrow-alt-left"></i>
    </button>
  </div>
);

const FlashCard = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const dispatch = useDispatch(); // ✅ Redux hook

  // ✅ Product list directly from your Data.js file
  const { productItems } = Data;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {productItems.map((item, index) => (
        <div className="box" key={item.id || index}>
          <div className="product mtop">
            <div className="img">
              <span className="discount">{item.discount}% Off</span>
              <img src={item.cover} alt={item.name} />
              <div className="product-like">
                <label>{count}</label> <br />
                <i className="fa-regular fa-heart" onClick={increment}></i>
              </div>
            </div>
            <div className="product-details">
              <h3>{item.name}</h3>
              <div className="rate">
                {[...Array(5)].map((_, i) => (
                  <i className="fa fa-star" key={i}></i>
                ))}
              </div>
              <div className="price">
                <h4>${item.price}.00</h4>
                <button onClick={() => dispatch(addToCart(item))}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FlashCard;
