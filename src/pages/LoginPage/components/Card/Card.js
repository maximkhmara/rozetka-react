import Input from "../../../../components/Input/Input";
import logo from "../../../../assets/images/logo.svg";
import "./Card.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    if (!name.trim()) {
      setIsNameEmpty(true);
      isValid = false;
    }
    if (!password.trim()) {
      setIsPasswordEmpty(true);
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const data = await response.json();
      localStorage.setItem("jwt", data.jwt);
      navigate("/products-table", { replace: true });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-wrapper">
      <div className="card-logo">
        <img src={logo} alt="Logo" />
      </div>
      <Input
        placeholderName="User Name"
        initialType="text"
        name="name"
        onInputChange={(value) => {
          setName(value);
          setIsNameEmpty(false);
        }}
        value={name}
        isError={isNameEmpty}
      />
      {isNameEmpty && (
        <div className="card-input-error">Please enter the name</div>
      )}
      <Input
        showIcon
        placeholderName="Password"
        initialType="password"
        name="password"
        onInputChange={(value) => {
          setPassword(value);
          setIsPasswordEmpty(false);
        }}
        value={password}
        isError={isPasswordEmpty}
      />
      {isPasswordEmpty && (
        <div className="card-input-error">Please enter the password</div>
      )}
      {errorMessage && <div className="card-input-error">{errorMessage}</div>}
      <button className="login-submit-btn" type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};

export default Card;
