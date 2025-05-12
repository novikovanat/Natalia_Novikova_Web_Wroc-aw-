import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { BasketContext } from "../../hepers/context.tsx";
import type { Basket } from "./AppType.ts";
import Navigation from "../Navigation/Navigation.tsx";

const NotFoundPage = lazy(() => import("../../pages/NotFoundPage.tsx"));
const ProductPage = lazy(() => import("../../pages/ProductPage.tsx"));
const BasketPage = lazy(() => import("../../pages/BasketPage.tsx"));
const OrderSummaryPage = lazy(() => import("../../pages/OrderSummaryPage.tsx"));
const OderConfirmationPage = lazy(
  () => import("../../pages/OderConfirmationPage.tsx")
);

export default function App() {
  const [basket, setBasket] = useState<Basket>([]);
  return (
    <>
      <Navigation quantity={basket.length} />
      <Suspense fallback="wait ...for it">
        <Routes>
          <Route
            path="/"
            element={
              <BasketContext.Provider value={{ basket, setBasket }}>
                <ProductPage />
              </BasketContext.Provider>
            }
          />

          <Route path="/basket" element={<BasketPage goods={basket} />} />
          <Route path="/basket/summary" element={<OrderSummaryPage />} />
          <Route path="/confirmation" element={<OderConfirmationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
