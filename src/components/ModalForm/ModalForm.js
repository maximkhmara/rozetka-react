import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import "./ModalForm.css";
import { RxCross1 } from "react-icons/rx";
import { useForm } from "react-hook-form";

const ModalForm = ({ open, onClose, product, isEditing }) => {
  const { register, handleSubmit, reset } = useForm();

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

  const onSubmit = (data) => {
    console.log(data);
    onClose();
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
              className="modal-edit-form-field"
              id="category"
              name="category"
              label="Category"
              variant="filled"
              {...register("category", { required: "This field is required" })}
            />
            <TextField
              className="modal-edit-form-field"
              id="name"
              name="name"
              label="Name"
              variant="filled"
              {...register("name", { required: "This field is required" })}
            />
            <TextField
              className="modal-edit-form-field"
              id="quantity"
              name="quantity"
              label="Quantity"
              variant="filled"
              {...register("quantity", { required: "This field is required" })}
            />
            <TextField
              className="modal-edit-form-field"
              id="price"
              name="price"
              label="Price"
              variant="filled"
              {...register("price", { required: "This field is required" })}
            />
            <TextField
              className="modal-edit-form-field"
              id="description"
              name="description"
              label="Description"
              variant="filled"
              {...register("description", {
                required: "This field is required",
              })}
            />
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
