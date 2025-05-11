import { createContext } from "react";
import type { BasketContextType } from "../components/App/AppType.ts";
export const BasketContext = createContext<BasketContextType>({
  basket: [],
  setBasket: () => {
    console.error("oops, the default got used. Fix your bug!");
  },
});
