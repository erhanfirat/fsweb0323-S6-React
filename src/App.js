import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./layout/Main";

import "./App.css";
// props drilling

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
        .then((res) => {
          //console.log("producst: > ", res.data);
          setProducts(res.data);
        });
    }, 3000);
  }, []);

  return <Main products={products} />;
}

export default App;
