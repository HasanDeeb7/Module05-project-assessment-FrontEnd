import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();

  async function getProducts() {
    try {
      const response = await axios.get(`http://localhost:5000/product/`);
      if (response) {
        setProducts(response.data);
        setLoading(false);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products && products.length > 0
        ? products.map((item) => (
            <ProductItem
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              _id={item._id}
            />
          ))
        : "No products found"}
    </div>
  );
}

export default Products;
