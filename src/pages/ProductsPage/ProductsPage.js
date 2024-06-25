import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductsPage.css";
import logo2 from "../../assets/images/logo2.svg";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://666eb129f1e1da2be520e627.mockapi.io/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="products-page">Loading...</div>;
  }

  if (error) {
    return <div className="products-page">Error: {error.message}</div>;
  }

  return (
    <div className="products-page">
      <div className="products-page-logo">
        <img src={logo2} alt="Logo" />
      </div>
      <div className="products-page-content">
        <ProductsCard products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
