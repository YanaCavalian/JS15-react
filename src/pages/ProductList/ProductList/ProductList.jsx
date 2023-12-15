import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Product List</h1>
      {products.length > 0 ? (
        <div>
          {products.map((product) => (
            <div className="product-container " key={product.id}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <Link
                to={{
                  pathname: `/JS15-react/product/${product.id}`,
                  state: { product },
                }}
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
