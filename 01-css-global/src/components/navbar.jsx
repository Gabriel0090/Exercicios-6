import PropTypes from "prop-types";

export default function Navbar({ cartCount = 0, theme, setTheme }) {
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <header className="navbar" role="navigation" aria-label="Barra principal">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div className="logo" tabIndex={0}>MiniLoja</div>
        <div style={{ color: "var(--muted)", fontSize: 14 }}>Produtos selecionados</div>
      </div>

      <div className="nav-controls" role="toolbar" aria-label="Controles">
        <button
          aria-pressed={theme === "dark"}
          aria-label="Alternar tema claro ou escuro"
          className="btn btn-ghost"
          onClick={toggle}
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </button>

        <button className="btn btn-outline" aria-label={`Abrir carrinho. ${cartCount} itens`}>
          🛒
          <span className="badge" aria-hidden="true">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};