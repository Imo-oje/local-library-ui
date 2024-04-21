import { useEffect, useState } from "react";
import RouteHandler from "./config/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";

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
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  const [addError, setaddError] = useState(""); //testin purpose

  function addItem(product) {
    const itemExists = cartItems.find((item) => item._id === product._id);
    if (itemExists) {
      setaddError("Book already in Cart");
      //setCartItems(cartItems.map((item) => (item._id === product._id ? { ...itemExists } : item)));
    } else {
      //clear error message first
      setaddError("");
      updateCount();
      setCartItems([...cartItems, { ...product }]);
    }
  }

  function updateCount() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    /* const empty = cartItems.length === 0;
    if (empty) {
      setCount(0);
    } else {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    } */
  }
  function updateCart(cart, itemIndex) {
    if (itemIndex > -1) {
      cart.splice(itemIndex, 1);
    }
    setCartItems(cart);
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }

  const { loading, data, error } = getData();
  if (error) {
    return <h2>{`A network error was encountered || ${error}`}</h2>;
  }
  return (
    <Router>
      <Layout>
        <RouteHandler
          loading={loading}
          data={data}
          cartItems={cartItems}
          addProduct={addItem}
          addError={addError}
          itemCount={count}
          updateCart={updateCart}
        />
      </Layout>
    </Router>
  );
}

export default App;
