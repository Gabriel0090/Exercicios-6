import Navbar from "./components/navbar";
import ProductCard from "./components/productCard";
import "./App.css";
import { PRODUCTS } from "../data/products";
import { useEffect, useState } from "react";

export default function App() {
  // cartCount just for the badge demo
  const [cartCount, setCartCount] = useState(0);
  // theme persistence
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleAdd = () => {
    // simple demo: increment cart and simulate adding
    setCartCount((c) => c + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} theme={theme} setTheme={setTheme} />
      <main className="container" role="main">
        <h1 className="visually-hidden">Mini Loja</h1>
        <section aria-label="Produtos" className="products-grid" >
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={() => handleAdd(p)} />
          ))}
        </section>
      </main>
    </>
  );
}
