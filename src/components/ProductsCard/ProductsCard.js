import './ProductsCard.css';

const ProductsCard = ({ products }) => {
	return (
		<div className='card-wrapper'>
			{products.map((product) => (
				<div key={product.id} className='product-card'>
					<img
						className='product-card-image'
						src={product.image}
						alt={product.name}
					/>
					<div>{product.category}</div>
					<div>{product.name}</div>
					<div>{product.quantity}</div>
					<div>{product.price}</div>
				</div>
			))}
		</div>
	);
};

export default ProductsCard;
