// outsource js lib
import { useEffect, useState } from "react";
import { Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
// internal Js
import Title from "../components/Title";
// css
import "./ProductsPage.css";

const ProductsPage = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    // console.log("Products datası ürün sayfasından yakalandı: ", products);
  }, [products]);

  useEffect(() => {
    console.log("[FİLTRELEME ÇALIŞTI] filterText: ", filterText);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [filterText, products]);

  return (
    <div>
      <Title>
        <button
          onClick={() => {
            nav(-1);
          }}
        >
          {"<"}
        </button>{" "}
        Ürünler Sayfası
      </Title>
      <hr />
      <Input
        type="text"
        onChange={(e) => setFilterText(e.target.value)}
        className="mb-3"
      />
      <div className="product-container">
        {filteredProducts.map((product, i) => {
          return (
            <div className="product-card" key={i}>
              <img src={product.img} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-price">{product.price}</div>
              {product.stock < 5 && product.stock > 0 && (
                <div className="son-urun">Son {product.stock} ürün kaldı!</div>
              )}
              <button disabled={product.stock == 0}>Sepete Ekle</button>
              <Link to={"/product-page/" + product.id}>Ürünü İncele</Link>
              <button
                onClick={() => {
                  nav("/product-page/" + product.id);
                }}
              >
                Detay
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
