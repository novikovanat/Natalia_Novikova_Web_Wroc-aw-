import { useContext } from "react";
import { BasketContext } from "../../hepers/context.tsx";
import type { Item } from "../App/AppType.ts";
export default function ProductCard({
  name,
  price: { main, fractional },
  id
}: Item) {
  const { setBasket } = useContext(BasketContext);

  function handleAddToCart() {
    setBasket((prev) => {
      return [...prev, { name, price: { main, fractional }, id }];
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
