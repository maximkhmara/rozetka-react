import './ProductsPage.css';
import logo2 from '../../assets/images/logo2.svg';
import ProductsCard from '../../components/ProductsCard/ProductsCard';

const ProductsPage = () => {
	const products = [
		{
			id: 0,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'PC',
			name: 'Lenovo Y50-70',
			quantity: 5,
			price: '25,000.00',
		},
		{
			id: 1,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'Clothes',
			name: 'Nike M Nk Df Acd21',
			quantity: 22,
			price: '4,000.00',
		},
		{
			id: 2,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'Plumbing',
			name: 'CERSANIT MITO 17',
			quantity: 1337,
			price: '5,000.00',
		},
		{
			id: 3,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'Plumbing',
			name: 'CERSANIT MITO 17',
			quantity: 1337,
			price: '5,000.00',
		},
		{
			id: 4,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'Plumbing',
			name: 'CERSANIT MITO 17',
			quantity: 1337,
			price: '5,000.00',
		},
		{
			id: 5,
			image: 'https://content1.rozetka.com.ua/goods/images/big/47592568.jpg',
			category: 'Plumbing',
			name: 'CERSANIT MITO 17',
			quantity: 1337,
			price: '5,000.00',
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
