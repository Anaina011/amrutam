import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import StorePage from "./pages/StorePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage";
import IngredientDetailPage from "./pages/IngredientDetailPage";

const Placeholder = ({ title }) => (
  <div className="max-w-6xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-semibold mb-2">{title}</h1>
    <p className="text-slate-600">Content coming soon...</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Placeholder title="Home" />} />
          <Route path="/find-doctors" element={<Placeholder title="Find Doctors" />} />
          <Route path="/lab-tests" element={<Placeholder title="Lab Tests" />} />
          <Route path="/shop" element={<StorePage />} />
          <Route path="/forum" element={<Placeholder title="Forum" />} />
          <Route path="/about" element={<Placeholder title="About Us" />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/ingredient/:slug" element={<IngredientDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

