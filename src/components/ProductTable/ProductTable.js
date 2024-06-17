import React from "react";
import "./ProductTable.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { TbArrowsDownUp } from "react-icons/tb";

const ProductTable = ({ products }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>
            ID
            <TbArrowsDownUp />
          </th>
          <th>
            Category
            <TbArrowsDownUp />
          </th>
          <th>
            Name
            <TbArrowsDownUp />
          </th>
          <th>
            Quantity
            <TbArrowsDownUp />
          </th>
          <th>
            Price (€)
            <TbArrowsDownUp />
          </th>
          <th>
            Actions
            <TbArrowsDownUp />
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            className={product.id % 2 === 0 ? "even" : "odd"}
          >
            <td>{product.id}</td>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>
              <button className="edit-button">
                <FaPencilAlt />
              </button>
              <button className="delete-button">
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
