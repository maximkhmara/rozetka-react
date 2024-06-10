import "./Input.css";
import { IoEye, IoEyeOff } from "react-icons/io5"; // додано IoEyeOff для перекресленого ока
import { useState } from "react";

const Input = ({ ourClass, placeholderName, showIcon, initialType }) => {
  const [isPassword, setIsPassword] = useState(initialType === "password");

  const handleClick = () => {
    setIsPassword((prevIsPassword) => !prevIsPassword);
  };

  return (
    <label className={ourClass ? `login-input ${ourClass}` : "login-input"}>
      <input
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
