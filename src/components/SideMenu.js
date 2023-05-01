import { NavLink } from "react-router-dom";
import "./SideMenu.css";

const activeNavLink = {
  color: "#356ae6",
  background: "#fff",
};

const SideMenu = () => {
  return (
    <div>
      <h3>Menu</h3>
      <NavLink
        className={({ isActive }) =>
          "side-menu-link " + (isActive ? "active" : "")
        }
        to="/"
      >
        Ana Sayfa
      </NavLink>
      <NavLink
        className="side-menu-link"
        to="/products"
        style={({ isActive }) => (isActive ? activeNavLink : null)}
      >
        Ürünler
      </NavLink>
      <NavLink
        className="side-menu-link"
        to="/counter"
        style={({ isActive }) => (isActive ? activeNavLink : null)}
      >
        Sayaç
      </NavLink>
      <NavLink
        className="side-menu-link"
        to="/iletisim"
        style={({ isActive }) => (isActive ? activeNavLink : null)}
      >
        İletişim
      </NavLink>
    </div>
  );
};

export default SideMenu;
