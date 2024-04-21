import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";

export default function RouteHandler({ loading, data, cartItems, addProduct, addError }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Catalog loading={loading} data={data} addProduct={addProduct} addError={addError} />
        }
      />
      <Route path="/cart" element={<Cart cartItems={cartItems} addProduct={addProduct} />} />
    </Routes>
  );
}
