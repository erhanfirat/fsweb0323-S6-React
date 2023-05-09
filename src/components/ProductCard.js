import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const nav = useNavigate();

  return (
    <div className="product-card" key={product.id}>
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
};

export default ProductCard;
