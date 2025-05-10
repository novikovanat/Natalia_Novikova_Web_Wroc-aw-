import type { productCardProps } from "./ProductCardType.ts";
export default function ProductCard({
  name,
  price: { main, fractional },
}: productCardProps) {
  function handleAddToCart() {
    console.log("Dodano do koszyka");
  }
  return (
    <li>
      <p>{name}</p>
      <p>
        price: {main}, {fractional}
      </p>
      <button type="button" onClick={handleAddToCart}>Dodaj do koszyka</button>
    </li>
  );
}
