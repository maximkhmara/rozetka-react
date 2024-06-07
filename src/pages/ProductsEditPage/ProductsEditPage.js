import './ProductsEditPage.css';
import IconButton from '../../components/IconButton/IconButton';
import { FaRegUser } from 'react-icons/fa6';
import { FiPlus } from 'react-icons/fi';
import logo2 from '../../assets/images/logo2.svg';
import ProductTable from '../../components/ProductTable/ProductTable';

const ProductsEditPage = () => {
	const products = [
		{
			id: 0,
			category: 'PC',
			name: 'Lenovo Y50-70',
			quantity: 5,
			price: '25,000.00',
		},
		{
			id: 1,
			category: 'Clothes',
			name: 'Nike M Nk Df Acd21',
			quantity: 22,
			price: '4,000.00',
		},
		{
			id: 2,
			category: 'Plumbing',
			name: 'CERSANIT MITO 17',
			quantity: 1337,
			price: '5,000.00',
		},
	];

	return (
		<div className='productsEditPage-wrapper'>
			<div className='productsEditPage-top'>
				<img src={logo2} alt='Logo' />
			</div>
			<div className='productsEditPage-btns'>
				<IconButton CustomIcon={<FaRegUser />} name='Preview' />
				<IconButton CustomIcon={<FiPlus />} name='Add' />
			</div>
			<div className='productsEditPage-title'>Products</div>
			<ProductTable products={products} />
		</div>
	);
};

export default ProductsEditPage;
