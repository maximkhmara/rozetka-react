import React from 'react';
import './ProductTable.css'; // Importing the CSS file for styling

const ProductTable = ({ products }) => {
	return (
		<table className='product-table'>
			<thead>
				<tr>
					<th>ID</th>
					<th>Category</th>
					<th>Name</th>
					<th>Quantity</th>
					<th>Price (€)</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product) => (
					<tr
						key={product.id}
						className={product.id % 2 === 0 ? 'even' : 'odd'}>
						<td>{product.id}</td>
						<td>{product.category}</td>
						<td>{product.name}</td>
						<td>{product.quantity}</td>
						<td>{product.price}</td>
						<td>
							<button className='edit-button'>✏️</button>
							<button className='delete-button'>🗑️</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ProductTable;
