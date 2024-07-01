import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./BasicModal.css";

const BasicModal = ({ open, onClose, onDelete }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-box">
        <div className="modal-delete-title">
          Are u sure you want to delete this product?
        </div>
        <div className="modal-delete-btns">
          <Button onClick={onClose} className="modal-cancel-btn">
            Cancel
          </Button>
          <Button onClick={onDelete} className="modal-delete-btn">
            Delete
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
export default BasicModal;
