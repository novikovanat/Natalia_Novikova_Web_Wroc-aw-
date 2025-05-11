import { NavLink } from "react-router-dom";

export default function Navigation({ quantity }: { quantity: number }) {

  return (
    <nav>
      <NavLink to="/">Sklep</NavLink>
      <NavLink to="/basket">Koszyk {quantity}</NavLink>
    </nav>
  );
}
