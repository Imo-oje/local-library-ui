import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";

export default function RouteHandler({
  itemCount,
  loading,
  data,
  cartItems,
  addProduct,
  addError,
  updateCart,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Catalog
            itemCount={itemCount}
            loading={loading}
            data={data}
            addProduct={addProduct}
            addError={addError}
          />
        }
      />
      <Route path="/cart" element={<Cart cartItems={cartItems} updateCart={updateCart} />} />
    </Routes>
  );
}
