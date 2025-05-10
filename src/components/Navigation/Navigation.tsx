import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Sklep</NavLink>
      <NavLink to="/basket">Koszyk</NavLink>
    </nav>
  );
}
