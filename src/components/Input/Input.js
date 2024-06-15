import "./Input.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const Input = ({
  isError,
  ourClass,
  placeholderName,
  showIcon,
  initialType,
  onInputChange,
  value,
  name,
}) => {
  const [isPassword, setIsPassword] = useState(initialType === "password");

  const handleClick = () => {
    setIsPassword((prevIsPassword) => !prevIsPassword);
  };

  return (
    <label className={ourClass ? `login-input ${ourClass}` : "login-input"}>
      <input
        className={isError && "input-error"}
        name={name}
        onChange={(event) => onInputChange(event.target.value)}
        value={value}
        type={isPassword ? "password" : "text"}
        placeholder={placeholderName}
      />
      {showIcon &&
        (isPassword ? (
          <IoEye onClick={handleClick} className="password-eye-icon" />
        ) : (
          <IoEyeOff onClick={handleClick} className="password-eye-icon" />
        ))}
    </label>
  );
};

export default Input;
