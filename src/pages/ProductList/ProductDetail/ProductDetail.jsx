import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product || Object.keys(product).length === 0) {
    return null;
  }

  return (
    <div className="detail">
      <Link to="/JS15-react" className="home">
        Home
      </Link>
      <h2>{product.title}</h2>
      <p>
        <span>Brand:</span> {product.brand}
      </p>
      <p>
        <span>Category:</span> {product.category}
      </p>
      <p>
        <span>Description:</span> {product.description}
      </p>
      <p>
        <span>Discount Percentage:</span> {product.discountPercentage}
      </p>
      <p>
        <span>Price:</span> {product.price}
      </p>
      <p>
        <span>Stock:</span> {product.stock}
      </p>
      <div className="images">
        {product.images &&
          product.images.map((image, index) => (
            <img src={image} key={index} alt={`Product Image ${index}`} />
          ))}
      </div>
    </div>
  );
};

export default ProductDetail;
