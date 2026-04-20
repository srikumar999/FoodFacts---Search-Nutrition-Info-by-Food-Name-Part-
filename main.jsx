import FoodCard from "./FoodCard";
import "./FoodList.css";

function FoodList({ products }) {
  return (
    <div className="food-list">
      {products.map((product) => (
        <FoodCard key={product.code || product.id || product.product_name} product={product} />
      ))}
    </div>
  );
}

export default FoodList;
