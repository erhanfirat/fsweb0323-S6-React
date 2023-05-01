import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Greeting from "../components/Greeting";
import SideMenu from "../components/SideMenu";
import MainPage from "../pages/MainPage";
import SayacPage from "../pages/SayacPage";
import ProductsPage from "../pages/ProductsPage";

import "./Main.css";
import ProductDetailPage from "../pages/ProductDetailPage";

//props drilling

const Main = ({ products }) => {
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
            <Route
              path="/products"
              element={<ProductsPage products={products} />}
            />
            <Route path="/counter" element={<SayacPage />} />
            <Route
              path="/product-page/:productId"
              element={<ProductDetailPage products={products} />}
            />
          </Routes>
        </div>
      </div>
      <div className="footer-container">Footer Area</div>
    </div>
  );
};

export default Main;
