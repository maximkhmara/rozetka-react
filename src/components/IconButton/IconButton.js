import './IconButton.css';

const IconButton = ({ CustomIcon, name }) => {
	return (
		<div className='IconButton-btn'>
			{CustomIcon} {name}
		</div>
	);
};

export default IconButton;
