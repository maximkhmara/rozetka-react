import React, { useState, useEffect } from "react";
import "./ProductsEditPage.css";
import IconButton from "../../components/IconButton/IconButton";
import { FaRegUser } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import logo2 from "../../assets/images/logo2.svg";
import ProductTable from "../../components/ProductTable/ProductTable";
import { Link } from "react-router-dom";

const ProductsEditPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://666eb129f1e1da2be520e627.mockapi.io/api/v1/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="productsEditPage-wrapper">
      <div className="productsEditPage-top">
        <img src={logo2} alt="Logo" />
      </div>
      <div className="productsEditPage-btns">
        <Link to="/products-page">
          <IconButton CustomIcon={<FaRegUser />} name="Preview" />
        </Link>
        <IconButton CustomIcon={<FiPlus />} name="Add" />
      </div>
      <div className="productsEditPage-title">Products</div>
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsEditPage;
