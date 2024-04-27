import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import "./catalog.scss";

export default function ({ loading, data, addProduct, addError }) {
  return (
    <div className="flex-container">
      {loading ? (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="loading"
        />
      ) : data.length <= 0 ? (
        <h2>No books available</h2>
      ) : (
        data.map((book) => {
          return (
            <div key={book._id} className="book">
              <Link to={`/books/${book._id}`}>{book.title}</Link>
              <button onClick={() => addProduct(book)}>Add to cart</button>
            </div>
          );
        })
      )}

      <p>{addError}</p>
    </div>
  );
}
