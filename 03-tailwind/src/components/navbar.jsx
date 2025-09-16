import PropTypes from "prop-types";
import Button from "/Button";

export default function Navbar({ cartCount = 0, theme, setTheme }) {
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-5 bg-white/75 dark:bg-gray-900/70 backdrop-blur-md shadow-md dark:shadow-lg z-50">
      <div className="flex items-center gap-3">
        <div className="font-bold text-lg tracking-wide">MiniLoja</div>
        <div className="text-sm text-muted">Produtos selecionados</div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          onClick={toggle}
          aria-pressed={theme === "dark"}
          aria-label="Alternar tema claro ou escuro"
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </Button>

        <Button
          variant="outline"
          aria-label={`Abrir carrinho. ${cartCount} itens`}
        >
          🛒
          <span className="inline-grid place-items-center min-w-[22px] h-[22px] px-1.5 rounded-full bg-primary text-white text-xs ml-1.5">
            {cartCount}
          </span>
        </Button>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};