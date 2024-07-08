import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import "./ModalForm.css";
import { RxCross1 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../apiConfig";

const ModalForm = ({ open, onClose, product, isEditing, onProductAdded }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEditing && product) {
      reset({
        category: product.category,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        description: product.description,
      });
    } else {
      reset({
        category: "",
        name: "",
        quantity: "",
        price: "",
        description: "",
      });
    }
  }, [isEditing, product, reset]);

  const onSubmit = async (data) => {
    try {
      const response = isEditing
        ? await fetch(`${BASE_URL}/${product.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
        : await fetch(BASE_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

      if (response.ok) {
        onClose();
        onProductAdded();
      } else {
        console.error("Error saving product", response.statusText);
      }
    } catch (error) {
      console.error("Error saving product", error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-edit-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-edit-form-top">
            <div className="modal-edit-top-title">
              {isEditing ? "Edit product" : "Add product"}
            </div>
            <RxCross1 className="modal-edit-top-cross" onClick={onClose} />
          </div>
          <div className="modal-edit-container">
            <TextField
              className={`modal-edit-form-field ${
                errors.category ? "error-border" : ""
              }`}
              id="category"
              name="category"
              label="Category"
              variant="filled"
              {...register("category", { required: "This field is required" })}
              error={!!errors.category}
            />
            {errors.category && (
              <div className="error-message">This field is required</div>
            )}
            <TextField
              className={`modal-edit-form-field ${
                errors.name ? "error-border" : ""
              }`}
              id="name"
              name="name"
              label="Name"
              variant="filled"
              {...register("name", { required: "This field is required" })}
              error={!!errors.name}
            />
            {errors.name && (
              <div className="error-message">This field is required</div>
            )}
            <TextField
              className={`modal-edit-form-field ${
                errors.quantity ? "error-border" : ""
              }`}
              id="quantity"
              name="quantity"
              label="Quantity"
              variant="filled"
              {...register("quantity", { required: "This field is required" })}
              error={!!errors.quantity}
            />
            {errors.quantity && (
              <div className="error-message">This field is required</div>
            )}
            <TextField
              className={`modal-edit-form-field ${
                errors.price ? "error-border" : ""
              }`}
              id="price"
              name="price"
              label="Price"
              variant="filled"
              {...register("price", { required: "This field is required" })}
              error={!!errors.price}
            />
            {errors.price && (
              <div className="error-message">This field is required</div>
            )}
            <TextField
              className={`modal-edit-form-field ${
                errors.description ? "error-border" : ""
              }`}
              id="description"
              name="description"
              label="Description"
              variant="filled"
              {...register("description", {
                required: "This field is required",
              })}
              error={!!errors.description}
            />
            {errors.description && (
              <div className="error-message">This field is required</div>
            )}
          </div>
          <div className="modal-edit-btns">
            <button
              type="button"
              className="modal-edit-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="modal-edit-submit">
              {isEditing ? "Save" : "Add"}
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalForm;
