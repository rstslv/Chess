import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productsAction";
import Product from "./Product";
import productsStyle from "./products.module.css";
export default function Products() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.products);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className={productsStyle.products}>
      {loading ? (
        <h2 className={productsStyle.loading}>loading ................</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        products.map((product) => (
          <Product product={product} key={product._id} />
        ))
      )}
    </div>
  );
}
