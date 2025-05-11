import ProductList from "../components/ProductsList/ProductsList.js";
import goods from "../assets/goods.json";
export default function ProductPage() {
  return <ProductList goods={goods} />;
}
