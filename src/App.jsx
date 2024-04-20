import { useEffect, useState } from "react";
import Layout from "./Layout";
import { IoPlaySharp } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { BsWindowSidebar } from "react-icons/bs";
import Carousel from "./components/Carousel";
import { Link } from "react-router-dom";

function getData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/catalog/books", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { loading, data, error };
}

function App() {
  const { loading, data, error } = getData();
  if (error) {
    return <h2>{error} : A network error was encountered!</h2>;
  }
  return (
    <Layout>
      <Carousel />

      {/* <div className="faded-circle"></div> */}
      {
        <div>
          {loading
            ? "loading..."
            : data.length <= 0
            ? "No books available"
            : data.map((book) => {
                return (
                  <Link to={`/books/${book._id}`} key={book._id}>
                    {book.title}
                  </Link>
                );
              })}
        </div>
      }
    </Layout>
  );
}

export default App;
