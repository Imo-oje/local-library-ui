import CartItems from "../components/views/cart/CartItems";
import Layout from "../Layout";

export default function Cart({ cartItems, addProduct }) {
  return <CartItems cartItems={cartItems} addProduct={addProduct} />;
}
