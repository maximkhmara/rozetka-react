import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductPreview.css";
import logo2 from "../../assets/images/logo2.svg";

const ProductPreview = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://666eb129f1e1da2be520e627.mockapi.io/api/v1/products/${productId}`
        );

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-preview-wrapper">
      <div className="product-preview-logo">
        <img src={logo2} alt="Logo" />
      </div>
      <div className="product-preview-content">
        <div className="product-preview-second">
          <Link to={"/products-page"} className="product-preview-arrow">
            ←
          </Link>
          <h1>{product.name}</h1>
        </div>
        <div className="product-preview-midle">
          <div className="product-preview-midle-left">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-preview-midle-right">
            <p className="product-status">{product.status}</p>
            <p className="product-price">{product.price}₴</p>
            <p className="product-availability">
              Кількість: {product.quantity}
            </p>
          </div>
        </div>

        <div className="product-info">
          <div className="product-description">
            <div className="product-description-top">
              <span className="product-description-title">Опис</span>
              <span className="product-description-name">{product.name}</span>
            </div>
            <p>{product.description}</p>
            <p>{product.description}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
