import type { productCardProps } from "./ProductCardType.ts";
import { useContext } from "react";
import { BasketContext } from "../../hepers/context.tsx";
export default function ProductCard({
  name,
  price: { main, fractional },
}: productCardProps) {
  const { setBasket } = useContext(BasketContext);

  function handleAddToCart() {
    setBasket((prev) => {
      return [...prev, { name, price: { main, fractional } }];
    });
  }

  return (
    <li>
      <p>{name}</p>
      <p>
        price:
        <span>
          {main},{fractional}
        </span>
        zł
      </p>
      <button type="button" onClick={handleAddToCart}>
        Dodaj do koszyka
      </button>
    </li>
  );
}
