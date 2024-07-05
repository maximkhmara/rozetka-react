import React, { useState, useEffect } from "react";
import "./ProductsEditPage.css";
import IconButton from "../../components/IconButton/IconButton";
import { FaRegUser } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import logo2 from "../../assets/images/logo2.svg";
import ProductTable from "../../components/ProductTable/ProductTable";
import { Link } from "react-router-dom";
import BasicModal from "../../components/BasicModal/BasicModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import { BASE_URL } from "../../apiConfig";

const ProductsEditPage = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openModalForm, setOpenModalForm] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpenModal = (id) => {
    setProductIdToDelete(id);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setProductIdToDelete(null);
  };

  const handleCloseModalForm = () => {
    setOpenModalForm(false);
  };

  const handleDeleteProduct = async () => {
    try {
      await fetch(`${BASE_URL}/${productIdToDelete}`, {
        method: "DELETE",
      });
      await fetchProducts();
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleEditProduct = (id) => {
    const product = products.find((p) => p.id === id);
    setProductToEdit(product);
    setOpenModalForm(true);
  };

  const handleAddProduct = () => {
    setOpenModalForm(true);
    setProductToEdit(null);
  };

  return (
    <div className="productsEditPage-wrapper">
      <div className="productsEditPage-top">
        <img src={logo2} alt="Logo" />
      </div>
      <div className="productsEditPage-btns">
        <Link to="/products-page">
          <IconButton CustomIcon={<FaRegUser />} name="Preview" />
        </Link>
        <button className="icon-add-button" onClick={handleAddProduct}>
          <FiPlus /> Add
        </button>
      </div>
      <div className="productsEditPage-title">Products</div>
      <ProductTable
        products={products}
        onDelete={handleOpenModal}
        onEdit={handleEditProduct}
      />
      <BasicModal
        open={open}
        onClose={handleCloseModal}
        onDelete={handleDeleteProduct}
      />
      <ModalForm
        open={openModalForm}
        onClose={handleCloseModalForm}
        product={productToEdit}
        isEditing={!!productToEdit}
      />
    </div>
  );
};

export default ProductsEditPage;
