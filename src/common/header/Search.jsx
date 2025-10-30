
import React, { useEffect } from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Search = ({ CartItem = [] }) => {
  // Fixed Header scroll behavior safely
  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      if (search) {
        search.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          {/* Logo */}
          <div className="logo width">
            <img src={logo} alt="Bonik Logo" />
          </div>

          {/* Search Box */}
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          {/* Icons */}
          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>
                  {CartItem && CartItem.length > 0 ? CartItem.length : ""}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
