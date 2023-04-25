import Greeting from "../components/Greeting";
import SideMenu from "../components/SideMenu";
import MainPage from "../pages/MainPage";
import SayacPage from "../pages/SayacPage";

import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="header-container">
        <Greeting userName={"Ali"} userEmail={"ali@ali.com"} userAge={19} />
      </div>
      <div className="content-container">
        <div className="left-side-container">
          <SideMenu />
        </div>
        <div className="page-container">
          <MainPage />
          <SayacPage />
        </div>
      </div>
      <div className="footer-container">Footer Area</div>
    </div>
  );
};

export default Main;
