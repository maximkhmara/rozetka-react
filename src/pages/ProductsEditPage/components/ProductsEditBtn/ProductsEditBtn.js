import './ProductsEditBtn.css';


const ProductsEditBtn = ({ CustomIcon, name }) => {
	return (
		<div className='productsEditPage-btn'>
			{CustomIcon} {name}
		</div>
	);
};

export default ProductsEditBtn;
