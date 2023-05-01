const ProductDetail = ({ product }) => {
  return (
    <div>
      <img src={product.img} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-price">{product.price}</div>
      {product.stock < 5 && product.stock > 0 && (
        <div className="son-urun">Son {product.stock} ürün kaldı!</div>
      )}
    </div>
  );
};

export default ProductDetail;
