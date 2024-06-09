import "./ProductsCard.css";

const ProductsCard = ({ products }) => {
  return (
    <div className="card-wrapper">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            className="product-card-image"
            src={product.image}
            alt={product.name}
          />
          <div className="product-card-name">{product.name}</div>
          <div className="product-card-middle">
            <div className="product-card-price">{product.price}</div>
            <div className="product-card-quantity">
              Кількість:
              {product.quantity}
            </div>
          </div>
          <div className="product-card-status">{product.status}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
