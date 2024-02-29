import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ItemDetailPage from "./routes/ItemDetailPage";
import SeeAllPage from "./routes/SeeAllPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SalePage from "./routes/SalePage";
import MenPage from "./routes/MenPage";
import WomenPage from "./routes/WomenPage";

export default function App() {
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:itemId" element={<ItemDetailPage />} />
          <Route path="/seeall" element={<SeeAllPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
        </Routes>
      </Router>
    </main>
  );
}
