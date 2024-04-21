import ItemCard from "../components/views/cart/ItemCard";
import Layout from "../Layout";

export default function Cart({ cartItems, updateCart }) {
  return <ItemCard cartItems={cartItems} updateCart={updateCart} />;
}
