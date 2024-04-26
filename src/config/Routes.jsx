import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/catalog/Catalog";
import Cart from "../pages/Cart";
import BookDetail from "../components/views/book/BookDetails";
import Profile from "../pages/Profile";

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
      <Route path="/books/:id" element={<BookDetail addProduct={addProduct} />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
