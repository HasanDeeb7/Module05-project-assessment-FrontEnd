import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem({
  _id,
  image,
  title,
  description,
  price,
  clickable = true,
}) {
  const navigate = useNavigate();
  function handleCheckout() {
    localStorage.setItem(
      "Product",
      JSON.stringify({ image, title, description, price, _id })
    );
    navigate("/checkout");
  }
  return (
    <div
      className={style.productContainer}
      onClick={clickable && handleCheckout}
    >
      <img src={image} alt="" />
      <div className={style.titlePriceWrapper}>
        <span>{title}</span>
        <span>{price}</span>
      </div>
      <div>{description}</div>
    </div>
  );
}

export default ProductItem;
