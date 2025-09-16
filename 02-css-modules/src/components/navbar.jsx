import PropTypes from "prop-types";
import Button from "./button"; 
import styles from "./Navbar.module.css";

export default function Navbar({ cartCount = 0, theme, setTheme }) {
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const navbarClassName = `${styles.navbar} ${
    theme === "dark" ? styles.themeDark : ""
  }`;

  return (
    <header
      className={navbarClassName}
      role="navigation"
      aria-label="Barra principal"
    >
      <div className={styles.logoContainer}>
        <div className={styles.logo} tabIndex={0}>
          MiniLoja
        </div>
        <div className={styles.tagline}>Produtos selecionados</div>
      </div>

      <div className={styles.navControls} role="toolbar" aria-label="Controles">
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
          <span className={styles.badge} aria-hidden="true">
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
