import { Link } from "react-router-dom";

export default function ({ loading, data, addProduct, addError }) {
  return (
    <div>
      {loading
        ? "loading..."
        : data.length <= 0
        ? "No books available"
        : data.map((book) => {
            return (
              <div key={book._id}>
                <Link to={`/books/${book._id}`}>{book.title}</Link>
                <button onClick={() => addProduct(book)}>Add to cart</button>
              </div>
            );
          })}

      <p>{addError}</p>
    </div>
  );
}
