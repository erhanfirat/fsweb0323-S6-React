import { NavLink } from "react-router-dom";
import "./SideMenu.css";
import { useSelector } from "react-redux";

const activeNavLink = {
  color: "#356ae6",
  background: "#fff",
};

const SideMenu = () => {
  const productsLength = useSelector((store) => store.products.length);

  const shoppingCartLength = useSelector(
    (store) => store.general.shoppingCart.length
  );
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
        data-test-id="urunler-linki"
      >
        Ürünler ({productsLength})
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
      <hr />
      <h3>Bana Özel</h3>
      <NavLink
        className="side-menu-link"
        to="/iletisim"
        style={({ isActive }) => (isActive ? activeNavLink : null)}
      >
        Sepetim ({shoppingCartLength})
      </NavLink>
    </div>
  );
};

export default SideMenu;
