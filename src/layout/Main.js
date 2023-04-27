import { useState } from "react";
import Greeting from "../components/Greeting";
import SideMenu from "../components/SideMenu";
import MainPage from "../pages/MainPage";
import SayacPage from "../pages/SayacPage";
import ProductsPage from "../pages/ProductsPage";

import "./Main.css";

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
          <MainPage />
          <SayacPage />
          <ProductsPage products={ products} />
        </div>
      </div>
      <div className="footer-container">Footer Area</div>
    </div>
  );
};

export default Main;
