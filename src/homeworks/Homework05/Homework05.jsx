import Product from "../../components/Product/Product";
import "./styles.css";
import { products } from "./data";

function Homework05() {
  const productCards = products.map((product) => {
    return (
      <Product
        key={product.id}
        productName={product.name}
        productPrice={product.price}
      />
    );
  });

  return <div className="homework05-wrapper">{productCards}</div>;
}

export default Homework05;