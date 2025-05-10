import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const ProductPage = lazy(() => import("../../pages/ProductPage.tsx"));
const BasketPage = lazy(() => import("../../pages/BasketPage.tsx"));
const OrderSummaryPage = lazy(() =>
  import("../../pages/OrderSummaryPage.tsx"))
const OderConfirmationPage = lazy(() => import("../../pages/OderConfirmationPage.tsx"));




import './App.css'

function App() {
  return (
    <Suspense fallback='wait ...for it'>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/basket/summary" element={<OrderSummaryPage />}/>
        <Route path="/confirmation" element={<OderConfirmationPage />}/>
      </Routes>
    </Suspense>
  );
}


export default App
