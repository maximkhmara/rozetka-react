import './Input.css';
import { IoEye } from 'react-icons/io5';

const Input = ({ ourClass, placeholderName, showIcon }) => {
	return (
		<label className={ourClass ? `login-input ${ourClass}` : 'login-input'}>
			<input type='text' placeholder={placeholderName} />
			{showIcon ? <IoEye className='password-eye-icon' /> : null}
		</label>
	);
};

export default Input;
