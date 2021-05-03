import React from "react";
import navbarStyle from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar({ click }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  return (
    <nav className={navbarStyle.navbar}>
      <div className={navbarStyle.logo}>
        <h2>Магазин шахматных фигур</h2>
      </div>
      <ul className={navbarStyle.links}>
        <li>
          <Link to="/cart" className={navbarStyle.link}>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Корзина
              <span className={navbarStyle.cartlogo_badge}>{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Магазин</Link>
        </li>
      </ul>
      <div className={navbarStyle.hamburger_menu} onClick={click}>
      </div>
    </nav>
  );
}
