import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import {
  addtoShopingCart,
  deleteProductAction,
  deleteProductActionCreator,
} from "../store/actions/actions";

const ProductCard = ({ product }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="product-card" key={product.id}>
      <img src={product.img} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-price">{product.price}</div>
      {product.stock < 5 && product.stock > 0 && (
        <div className="son-urun">Son {product.stock} ürün kaldı!</div>
      )}
      <Button
        color="primary"
        className="m-1"
        disabled={product.stock == 0}
        onClick={() => {
          dispatch(addtoShopingCart(product));
        }}
      >
        Sepete Ekle
      </Button>
      <Link
        to={"/product-page/" + product.id}
        className="m-1 btn btn-secondary"
      >
        İncele
      </Link>
      <Button
        color="primary"
        className="m-1"
        onClick={() => {
          nav("/product-page/" + product.id);
        }}
      >
        Detay
      </Button>
      <Button
        color="danger"
        className="m-1"
        onClick={() => {
          dispatch(deleteProductActionCreator(product.id));
        }}
      >
        Ürünü Sil
      </Button>
    </div>
  );
};

export default ProductCard;
