import ProductCard from "../ProductCard/ProductCard";
export default function ProductsList({
  goods,
}: {
  goods: Array<{ name: string, price: { main: number;
    fractional: number;}, id: number }>,
}) {
  const list = goods.map(({ name, price, id }) => (
    <ProductCard name={name} price={price} key={id} />
  ));

  return <ul>{list}</ul>;
}
