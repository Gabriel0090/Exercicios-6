// src/App.jsx
import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './globalStyle';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { PRODUCTS } from '../data/products.js'; 

const Container = styled.main`
  max-width: 1200px;
  margin: 84px auto 40px;
  padding: 0 16px;
  @media (max-width: 480px) {
    margin-top: 76px;
  }
`;

const ProductsGrid = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.space3};
  grid-template-columns: repeat(1, 1fr);
  
  @media (min-width: 481px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 769px) { grid-template-columns: repeat(3, 1fr); }
  @media (min-width: 1025px) { grid-template-columns: repeat(4, 1fr); }
`;

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleAdd = () => setCartCount(c => c + 1);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Navbar cartCount={cartCount} theme={theme} setTheme={setTheme} />
      <Container>
        <ProductsGrid>
          {PRODUCTS.map(p => (
            <ProductCard key={p.id} product={p} onAdd={handleAdd} />
          ))}
        </ProductsGrid>
      </Container>
    </ThemeProvider>
  );
}