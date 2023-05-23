import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./layout/Main";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setProductsAction } from "./store/actions/actions";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
        .then((res) => {
          dispatch(setProductsAction(res.data));
        });
    }, 3000);
  }, []);

  return (
    <>
      <Main />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={true}
        theme="dark"
      />
    </>
  );
}

export default App;
