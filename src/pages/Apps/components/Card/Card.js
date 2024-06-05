import Input from '../../../../components/Input/Input';
import logo from '../../../../assets/images/logo.svg';
import './Card.css';
import LoginBtn from '../../../../components/LoginBtn/LoginBtn';

const Card = () => {
	return (
		<div className='card-wrapper'>
			<div className='card-logo'>
				<img src={logo} alt='Logo' />
			</div>
			<Input placeholderName='User Name' />
			<Input showIcon placeholderName='Password' />
			<LoginBtn />
		</div>
	);
};

export default Card;
