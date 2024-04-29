export default function Cart({ cartItems, itemCount, updateCart }) {
  return (
    <>
      <div className="header">
        <h1>Cart</h1>
        <div className="counter">{`${itemCount} ${itemCount > 1 ? "items" : "item"} in cart`}</div>
      </div>
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
    </>
  );
}
