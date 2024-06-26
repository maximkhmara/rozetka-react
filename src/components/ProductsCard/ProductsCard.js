import { useNavigate } from "react-router-dom";
import "./ProductsCard.css";
import { BsCart4 } from "react-icons/bs";

const ProductsCard = ({ products }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product-preview/${id}`);
  };

  return (
    <div className="product-card-wrapper">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => handleCardClick(product.id)}
        >
          <img
            className="product-card-image"
            src={product.image}
            alt={product.name}
          />
          <div className="product-card-name">{product.name}</div>
          <div className="product-card-middle">
            <div className="product-card-price">{product.price}₴</div>
            <div className="product-card-quantity">
              Кількість: {product.quantity}
            </div>
          </div>
          <div className="product-card-status">
            <BsCart4 />
            {product.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
