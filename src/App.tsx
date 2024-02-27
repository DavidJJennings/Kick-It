import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ItemDetailPage from "./routes/ItemDetailPage";

export default function App() {
  return (
    <main className="relative font-saira font-medium text-2xl p-2">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:itemId" element={<ItemDetailPage />} />
        </Routes>
      </Router>
    </main>
  );
}
