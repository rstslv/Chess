import React from "react";
import Products from "../Products";
import homeStyle from "./home.module.css";

export default function Home() {
  return (
    <div className={homeStyle.homeScreen}>
      <div className={homeStyle.homeScreen_products}>
      <h2 className={homeStyle.homeScreen_title}>Товары в наличии</h2>
        <Products />
      </div>
    </div>
  );
}
