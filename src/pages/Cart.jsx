import CartItems from "../components/views/cart/CartItems";
import Layout from "../Layout";

export default function Cart({ cartItems, updateCart }) {
  return <CartItems cartItems={cartItems} updateCart={updateCart} />;
}
