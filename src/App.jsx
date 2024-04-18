import { useEffect, useState } from "react";
import Layout from "./Layout";
import { IoPlaySharp } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { BsWindowSidebar } from "react-icons/bs";

/* function getData() {
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
} */

function App() {
  /*   const { loading, data, error } = getData();
  if (error) {
    return <h2>{error} : A network error was encountered!</h2>;
  } */
  return (
    <Layout>
      <h1>App</h1>
      {/* <div className="faded-circle"></div> */}
      {/*
      <h2>
        {loading
          ? "loading..."
          : data.length <= 0
          ? "No books available"
          : data.map((book) => {
              return <p key={book._id}>{book.title}</p>;
            })}
      </h2> */}
    </Layout>
  );
}

export default App;
