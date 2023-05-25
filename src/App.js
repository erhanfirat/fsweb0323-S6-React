import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./layout/Main";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  getProductsActionCreator,
  setProductsAction,
} from "./store/actions/actions";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsActionCreator());
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
