import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "./routes/HomePage";
import ItemDetailPage from "./routes/ItemDetailPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SalePage from "./routes/SalePage";
import MenPage from "./routes/MenPage";
import WomenPage from "./routes/WomenPage";
import Checkout from "./routes/Checkout";
import Contact from "./routes/Contact";
import About from "./routes/About";
import LoadingComponent from "./components/LoadingComponent";

export default function App() {
  const LazySeeAll = lazy(() => import("./routes/SeeAllPage"));
  function ScrollToTop() {
    /* Scroll to top whenever path name changes, in order to get the functionality of same page scroll to top
     when the link is clicked.*/
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <main className="relative font-saira font-medium text-xs overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:itemId" element={<ItemDetailPage />} />
          <Route
            path="/seeall"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <LazySeeAll />
              </Suspense>
            }
          />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}
