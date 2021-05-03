import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";
import { getProductDetails } from "../../../redux/actions/productsAction";
import productDetailsStyle from "./productDetails.module.css";
// *** Actions *** //

export default function ProductDetails({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const handelAddToCart = ()=>{
    dispatch(addToCart(product._id,qty));
    history.push('/cart');
  }
  return (
    <div className={productDetailsStyle.ProductDetails}>
      {loading ? (
        <h2>loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className={productDetailsStyle.ProductDetails__left}>
            <div className={productDetailsStyle.ProductDetails__left__img}>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className={productDetailsStyle.ProductDetails__left__info}>
              <p className={productDetailsStyle.left__name}> {product.name}</p>
              <p> Цена:{product.price}₽</p>
              <p>Описание : {product.description}</p>
            </div>
          </div>
          <div className={productDetailsStyle.ProductDetails__right}>
            <div className={productDetailsStyle.right__info}>
              <p>
                Price:<span>₽{product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "В наличии" : "Нет в наличии"}
                </span>
              </p>
              <p>
                Кол-во
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={handelAddToCart}>Добавить в корзину</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
