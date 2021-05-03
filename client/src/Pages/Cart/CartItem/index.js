    import React from "react";
    import { Link } from "react-router-dom";
    import cartItemStyle from "./cartItem.module.css";

    export default function CartItem({
      item,
      qtyChangeHandler,
      removeItemFromCart,
    }) {
      return (
        <div className={cartItemStyle.CartItem}>
          <div className={cartItemStyle.CartItem_image}>
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <Link
            to={`/product/${item.product}`}
            className={cartItemStyle.cartItem__name}
          >
            <p>{item.name}</p>
          </Link>
          <p className={cartItemStyle.cartItem__price}>₽{item.price}</p>
          <select
            className={cartItemStyle.cartItem__select}
            value={item.qty}
            onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
          >
            {[...Array(item.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
          <button
            className={cartItemStyle.cartItem__deleteBtn}
            onClick={() => removeItemFromCart(item.product)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      );
    }
