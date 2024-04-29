import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import "./catalog.scss";

export default function ({ loading, data, addProduct }) {
  return (
    <div className="grid-container">
      {loading ? (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperClass="loading"
        />
      ) : data.length <= 0 ? (
        <h2>No books available</h2>
      ) : (
        data.map((book) => {
          return (
            <div key={book._id} className="book">
              <img src={book.cover} alt={book.title} />
              <div className="details">
                <Link className="card-title" to={`/books/${book._id}`}>
                  {book.title}
                </Link>
                <p className="book-summary">{book.summary}</p>
                <button onClick={() => addProduct(book)}>Add to cart</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
