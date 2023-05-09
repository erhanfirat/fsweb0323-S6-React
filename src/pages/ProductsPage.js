// outsource js lib
import { useEffect, useState } from "react";
import { Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
// internal Js
import Title from "../components/Title";
// css
import "./ProductsPage.css";
import ProductCard from "../components/ProductCard";

const ProductsPage = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    console.log("[FİLTRELEME ÇALIŞTI] filterText: ", filterText);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [filterText, products]);

  useEffect(() => {
    console.log("filteredProducts güncellendi", filteredProducts);
  }, [filteredProducts]);

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
      <Link to="/create-product" data-test-id="new-product-link">
        {" "}
        Yeni Ürün Ekle{" "}
      </Link>
      <hr />
      <Input
        type="text"
        onChange={(e) => setFilterText(e.target.value)}
        className="mb-3"
        data-test-id="products-filter-input"
      />
      <div className="product-container">
        {filteredProducts.map((product, i) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
