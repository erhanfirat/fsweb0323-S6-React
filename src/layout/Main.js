import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Greeting from "../components/Greeting";
import SideMenu from "../components/SideMenu";
import MainPage from "../pages/MainPage";
import SayacPage from "../pages/SayacPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CreateProductPage from "../pages/CreateProductPage";
import ProductFormPage from "../pages/ProductFormPage";

import "./Main.css";

//props drilling

const Main = ({}) => {
  const [showGreeting, setShowGreeting] = useState(true);

  return (
    <div className="main-container">
      <div className="header-container">
        {showGreeting && (
          <Greeting userName={"Ali"} userEmail={"ali@ali.com"} userAge={19} />
        )}
        <button onClick={() => setShowGreeting(!showGreeting)}>
          Toggle Greeting Component
        </button>
      </div>
      <div className="content-container">
        <div className="left-side-container">
          <SideMenu />
        </div>
        <div className="page-container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/counter" element={<SayacPage />} />
            <Route
              path="/product-page/:productId"
              element={<ProductDetailPage />}
            />
            <Route path="/create-product" element={<CreateProductPage />} />
            <Route path="/product-form" element={<ProductFormPage />} />
          </Routes>
        </div>
      </div>
      <div className="footer-container">Footer Area</div>
    </div>
  );
};

export default Main;
