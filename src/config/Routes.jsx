import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/catalog/Catalog";
import Cart from "../pages/cart/Cart";
import BookDetail from "../components/views/book/BookDetails";
import Profile from "../pages/Profile";

export default function RouteHandler({
  loading,
  data,
  itemCount,
  cartItems,
  addProduct,
  updateCart,
}) {
  return (
    <Routes>
      <Route path="/" element={<Catalog loading={loading} data={data} addProduct={addProduct} />} />
      <Route
        path="/cart"
        element={<Cart cartItems={cartItems} itemCount={itemCount} updateCart={updateCart} />}
      />
      <Route path="/books/:id" element={<BookDetail addProduct={addProduct} />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
