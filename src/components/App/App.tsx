import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from '../Navigation/Navigation.tsx';
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage.tsx"));
const ProductPage = lazy(() => import("../../pages/ProductPage.tsx"));
const BasketPage = lazy(() => import("../../pages/BasketPage.tsx"));
const OrderSummaryPage = lazy(() => import("../../pages/OrderSummaryPage.tsx"));
const OderConfirmationPage = lazy(
  () => import("../../pages/OderConfirmationPage.tsx")
);


function App() {
  return (
    <>
      <Navigation/>
      <Suspense fallback="wait ...for it">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/basket/summary" element={<OrderSummaryPage />} />
          <Route path="/confirmation" element={<OderConfirmationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
