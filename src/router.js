import LoginPage from "./pages/LoginPage/LoginPage";
import ProductsEditPage from "./pages/ProductsEditPage/ProductsEditPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import Error from "./pages/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<PrivateRoute />}>
        <Route path="/products-table" element={<ProductsEditPage />} />
        <Route path="/products-page" element={<ProductsPage />} />
        <Route
          path="/product-preview/:productId"
          element={<ProductPreview />}
        />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
