import type { Dispatch, SetStateAction } from "react";
export type Item = {
  name: string;
  price: {
    main: number;
    fractional: number;
  };
  id: number;
};
export type Basket = Array<Item>;
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type BasketContextType = {
  basket: Basket;
  setBasket: Dispatch<SetStateAction<Basket>>;
};
