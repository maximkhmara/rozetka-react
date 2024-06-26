import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "/login" }) => {
  const token = localStorage.getItem("jwt"); // Оновлюємо ключ для зчитування токена

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
