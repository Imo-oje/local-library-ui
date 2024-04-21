export default function CartItems({ cartItems, addProduct }) {
  return (
    <div>
      {cartItems.length === 0 && <p>There are no items in cart</p>}
      {cartItems.map((book) => {
        return <div key={book._id}>{book.title}</div>;
      })}
    </div>
  );
}

/* receice items sent to cart here */
