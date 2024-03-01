import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ItemDetailPage from "./routes/ItemDetailPage";
import SeeAllPage from "./routes/SeeAllPage";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import SalePage from "./routes/SalePage";
import MenPage from "./routes/MenPage";
import WomenPage from "./routes/WomenPage";
import Checkout from "./routes/Checkout";
import ErrorModal from "./components/ErrorModal";
import { BasketContext } from "./Contexts/BasketContext";

export default function App() {
  const { error } = useContext(BasketContext);
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <main className="relative font-saira font-medium text-2xl overflow-x-hidden">
      <Router>
        <ScrollToTop></ScrollToTop>
        {error && <ErrorModal />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:itemId" element={<ItemDetailPage />} />
          <Route path="/seeall" element={<SeeAllPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </main>
  );
}
