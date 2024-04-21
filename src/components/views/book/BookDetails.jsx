import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Layout from "../../../Layout";
import "./book_details.css";

function bookInfo(id) {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/catalog/book/${id}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((res) => setInfo(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { info, error, loading };
}

export default function BookDetail({ addProduct }) {
  const { id } = useParams();
  const { info, error, loading } = bookInfo(id);

  if (error) return <p>Could'nt get book info</p>;

  return (
    <>
      <h1>{id}</h1>

      <div>
        {loading ? (
          "loading..."
        ) : !info ? (
          "book info not found"
        ) : (
          <div>
            <small>{info.book._id}</small>
            <h2>{info.book.author.family_name}</h2>
            <div>
              <p>{info.book.summary}</p>
            </div>
            <button
              onClick={() => {
                addProduct(info.book);
              }}
            >
              add to cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
