import "./styles.css";

function Product({ productName, productPrice }) {
  return (
    <div className="product-wrapper">
      <h3>{productName}</h3>
      {productPrice !== undefined ? <div>{productPrice}€</div> : null}
    </div>
  );
}

export default Product;