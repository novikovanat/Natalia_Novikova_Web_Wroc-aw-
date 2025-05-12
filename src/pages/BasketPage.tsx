import type { Basket } from "../components/App/AppType";
import ProductsList from "../components/ProductsList/ProductsList";

export default function BasketPage({ goods }: { goods: Basket }) {
  
  return (
    <ProductsList goods={goods} />
  )
}
