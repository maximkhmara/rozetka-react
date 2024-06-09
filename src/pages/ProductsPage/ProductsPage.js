import './ProductsPage.css';
import logo2 from '../../assets/images/logo2.svg';
import ProductsCard from '../../components/ProductsCard/ProductsCard';

const ProductsPage = () => {
	const products = [
		{
			id: 0,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'PC',
			name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
			quantity: 5,
			price: '25,000.00',
			status: '🛒 Готовий до відправлення'
		},
		{
			id: 1,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'Clothes',
			name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
			quantity: 22,
			price: '4,000.00',
			status: '🛒 Готовий до відправлення'
		},
		{
			id: 2,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'Plumbing',
			name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
			quantity: 1337,
			price: '5,000.00',
			status: '🛒 Готовий до відправлення'
		},
		{
			id: 3,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'Plumbing',
			name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
			quantity: 1337,
			price: '5,000.00',
			status: '🛒 Готовий до відправлення'
		},
		{
			id: 4,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'Plumbing',
			name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
			quantity: 1337,
			price: '5,000.00',
			status: '🛒 Готовий до відправлення'
		},
		{
			id: 5,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'Plumbing',
			name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
			quantity: 1337,
			price: '5,000.00',
			status: '🛒 Готовий до відправлення'
		},
	];

	return (
		<div className='products-page'>
			<div className='products-page-logo'>
				<img src={logo2} alt='Logo' />
			</div>
			<div className='products-page-content'>
				<ProductsCard products={products} />
			</div>
		</div>
	);
};

export default ProductsPage;
