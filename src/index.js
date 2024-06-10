import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import ProductsEditPage from './pages/ProductsEditPage/ProductsEditPage';
import ProductsPage from "./pages/ProductsPage/ProductsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <LoginPage /> */}
    {/* <ProductsEditPage /> */}
    <ProductsPage />
  </React.StrictMode>
);
