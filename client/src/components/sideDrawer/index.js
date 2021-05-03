import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sideDrawerStyle from "./sideDrawer.module.css";

export default function SideDrawer({ show, click }) {
  const sideDrawerClass = [sideDrawerStyle.sideDrawer];
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  if (show) {
    sideDrawerClass.push(sideDrawerStyle.show);
  }
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className={sideDrawerStyle.links} onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Корзина
              <span className={sideDrawerStyle.cartBadge}>{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Магазин</Link>
        </li>
      </ul>
    </div>
  );
}
