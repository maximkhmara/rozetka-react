import React, { useEffect, useState } from "react";
import "./ProductsPage.css";
import logo2 from "../../assets/images/logo2.svg";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import { BiLoaderAlt } from "react-icons/bi";
import { BASE_URL } from "../../apiConfig";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="products-page loading">
        <BiLoaderAlt className="products-loader" />
      </div>
    );
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
