import type { Basket } from "../App/AppType";
import ProductCard from "../ProductCard/ProductCard";
export default function ProductsList({
  goods,
}: {
  goods: Basket;
}) {
  const list = goods.map(({ name, price, id }) => (
    <ProductCard name={name} price={price} key={id} id={id} />
  ));

  return <ul>{list}</ul>;
}
