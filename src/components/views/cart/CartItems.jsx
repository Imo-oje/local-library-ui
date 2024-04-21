export default function CartItems({ cartItems, updateCart }) {
  return (
    <div>
      {cartItems.length === 0 && <p>There are no items in cart</p>}
      {cartItems.map((book, index) => {
        return (
          <div key={book._id}>
            <div>{book.title}</div>
            <button onClick={() => updateCart(cartItems, index)}>remove</button>
          </div>
        );
      })}
    </div>
  );
}

/* receice items sent to cart here */
