import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: ${({ theme }) =>
    theme.bg === "#ffffff" ? "rgba(255,255,255,0.75)" : "rgba(10,12,15,0.7)"};
  backdrop-filter: blur(6px);
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 100;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space3};
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
`;

const Tagline = styled.div`
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space2};
`;

const Badge = styled.span`
  display: inline-grid;
  place-items: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 999px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 0.75rem;
  margin-left: 6px;
`;

export default function Navbar({ cartCount, theme, setTheme }) {
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <Header>
      <LogoContainer>
        <Logo>MiniLoja</Logo>
        <Tagline>Produtos selecionados</Tagline>
      </LogoContainer>
      <Controls>
        <Button
          variant="ghost"
          onClick={toggleTheme}
          aria-label="Alternar tema"
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </Button>
        <Button
          variant="outline"
          aria-label={`Carrinho com ${cartCount} itens`}
        >
          🛒<Badge>{cartCount}</Badge>
        </Button>
      </Controls>
    </Header>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
