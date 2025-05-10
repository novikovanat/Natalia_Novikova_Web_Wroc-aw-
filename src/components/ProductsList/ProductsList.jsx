import ProductCard from "../ProductCard/ProductCard";
export default function ProductsList({ goods }) {
  const list = goods.map(({ name, price, id }) => (
    <ProductCard name={name} price={price} key={id} />
  ));

  return <ul>{list}</ul>;
}
