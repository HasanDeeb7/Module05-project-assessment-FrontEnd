import React from "react";
import ProductItem from "../components/ProductItem";
import axios from "axios";

function Checkout() {
  const product = JSON.parse(localStorage.getItem("Product"));
  async function addOrder() {
    try {
      const response = await axios.post("http://localhost:5000/order/create", {
        products: [product._id],
        quantity: 1, // in this case we only passing one product for order
      });
      if (response) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <ProductItem
          image={product.image}
          description={product.description}
          price={product.price}
          title={product.item}
          clickable={false}
        />
      </div>
      <button onClick={addOrder}>Place Order</button>
    </>
  );
}

export default Checkout;
