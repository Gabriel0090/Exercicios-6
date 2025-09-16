import TenisImg from '../img/tenis.png';
import CamisaImg from '../img/camisa.png';
import MochilaImg from '../img/mochila.png';
import RelogioImg from '../img/relogio.png';
import FoneImg from '../img/fone.png';
import GarrafaImg from '../img/garrafa.png';

export const PRODUCTS = [
  {
    id: 1,
    title: "Tênis Esportivo SuperConforto",
    price: 199.9,
    rating: 4.5,
    tag: "Novo",
    // 2. Usa a variável da imagem importada
    img: TenisImg
  },
  {
    id: 2,
    title: "Camiseta Casual Algodão Premium",
    price: 79.9,
    rating: 4.0,
    tag: "Promo",
    img: CamisaImg
  },
  {
    id: 3,
    title: "Mochila Urbana 20L com Muitos Bolsos",
    price: 129.9,
    rating: 4.8,
    tag: "Novo",
    img: MochilaImg
  },
  {
    id: 4,
    title: "Relógio Minimalista com Pulseira de Couro",
    price: 249.9,
    rating: 4.3,
    tag: "Novo",
    img: RelogioImg
  },
  {
    id: 5,
    title: "Fone de Ouvido Bluetooth com Cancelamento",
    price: 159.9,
    rating: 4.1,
    tag: "Novo",
    img: FoneImg
  },
  {
    id: 6,
    title: "Garrafa Térmica 1L - Mantém 12h",
    price: 59.9,
    rating: 4.6,
    tag: "Promo",
    img: GarrafaImg
  },
];