import React from "react";
import productStyle from "./product.module.css";
import { Link } from "react-router-dom";
export default function Product({ product }) {
  return (
    <div className={productStyle.product}>
      <img src={product.imageUrl} alt="product name" />
      <div className={productStyle.product__info}>
        <p className={productStyle.info__name}>{product.name}</p>
        <p className={productStyle.info__description}>
          {product.description.substring(0, 100)}...
        </p>
        <p className={productStyle.info__price}>₽{product.price}</p>
        <Link
          to={`/product/${product._id}`}
          className={productStyle.info__button}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
