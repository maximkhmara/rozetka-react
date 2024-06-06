import './ProductsEditPage.css';
import ProductsEditBtn from './components/ProductsEditBtn/ProductsEditBtn';
import { FaRegUser } from 'react-icons/fa6';
import { FiPlus } from 'react-icons/fi';
import logo2 from '../../assets/images/logo2.svg';
import ProductTable from './components/ProductTable/ProductTable';

const ProductsEditPage = () => {
	return (
		<div className='productsEditPage-wrapper'>
			<div className='productsEditPage-top'>
				<img src={logo2} alt='Logo' />
			</div>
			<div className='productsEditPage-btns'>
				<ProductsEditBtn CustomIcon={<FaRegUser />} name='Preview' />
				<ProductsEditBtn CustomIcon={<FiPlus />} name='Add' />
			</div>

			<div className='productsEditPage-title'>Products</div>
			<ProductTable />
		</div>
	);
};

export default ProductsEditPage;
