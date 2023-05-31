// outsource js lib
import { useEffect, useState } from "react";
import { Input, Spinner } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
// internal Js

import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import useAxios, { REQ_TYPES } from "../endpoints/useAxios";
// css
import "./ProductsPage.css";

const ProductsPage = () => {
  const [filterText, setFilterText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const nav = useNavigate();
  const [getProducts, products, loading, error] = useAxios([]);
  const [deleteProductRequest, deleteRes, deleteLoading, deleteÊrror] =
    useAxios([]);
  const [createProduct, createRes, createLoading] = useAxios([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [filterText, products]);

  useEffect(() => {
    console.log("filteredProducts güncellendi", filteredProducts);
  }, [filteredProducts]);

  useEffect(() => {
    getProducts({ endpoint: "products", reqType: REQ_TYPES.GET });
  }, []);

  const deleteProduct = (prodcutId) => {
    deleteProductRequest({
      endpoint: `products/${prodcutId}`,
      reqType: REQ_TYPES.DELETE,
    })
      .then(() => {
        getProducts({ endpoint: "products", reqType: REQ_TYPES.GET });
      })
      .catch((err) => {});
  };

  const createProductHandler = (productFormState) => {
    createProduct({
      endpoint: "products",
      reqType: REQ_TYPES.POST,
      payload: productFormState,
    });
  };

  const updteProductHandler = (productFormState) => {
    createProduct({
      endpoint: `products/${productFormState.id}`,
      reqType: REQ_TYPES.PUT,
      payload: productFormState,
    });
  };

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
        {deleteLoading && <span>Ürün siliniyor... </span>}
        {loading ? (
          <Spinner>Products Loading...</Spinner>
        ) : (
          filteredProducts.map((product, i) => (
            <ProductCard
              product={product}
              key={i}
              deleteProduct={deleteProduct}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
