import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import cartStyle from "./cart.module.css";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartSubtotal = () => {
    return cartItems.reduce(
      (price, item) => Number(item.price * item.qty) + price,
      0
    );
  };

  return (
    <div className={cartStyle.cartScreen}>
      <div className={cartStyle.cartScreen__left}>
        <h2>Корзина</h2>
        {cartItems.length === 0 ? (
          <div>
            Корзина пуста <Link to="/">Назад</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              removeItemFromCart={removeItemFromCart}
              qtyChangeHandler={qtyChangeHandler}
              item={item}
              key={item.product}
            />
          ))
        )}
      </div>
      <div className={cartStyle.cartScreen__right}>
        <div className={cartStyle.cartScreen__info}>
          <p>Итого ({getCartCount()}) товар(-ов)</p>
          <p> ₽{getCartSubtotal().toFixed(2)} </p>
        </div>
        <div>
          <button>Оформление</button>
        </div>
      </div>
    </div>
  );
}
