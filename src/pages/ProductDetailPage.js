import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { useSelector } from "react-redux";

const ProductDetailPage = ({}) => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const nav = useNavigate();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    setProduct(products.find((p) => p.id === productId));
  }, [productId, products]);

  return (
    <div>
      <h2>
        <button
          onClick={() => {
            nav(-1);
          }}
        >
          {"<"}
        </button>{" "}
        Product Detail: {productId}{" "}
      </h2>
      <hr />
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
