import { useEffect, useState } from "react";

import "./ProductsPage.css";

const ProductsPage = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

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
      <h2>Ürünler Sayfası</h2>
      <hr />
      <input type="text" onChange={(e) => setFilterText(e.target.value)} />
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
