import Button from "./button";
import Skeleton from "./skeleton";
import PropTypes from "prop-types"; 
import { useState } from "react";
import styles from "./ProductCard.module.css";

function renderStars(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

export default function ProductCard({ product, onAdd }) {
  const [loading, setLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleAdd = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    onAdd(product);
  };

  return (
    <article
      className={styles.card}
      tabIndex={0}
      aria-labelledby={`title-${product.id}`}
      aria-describedby={`desc-${product.id}`}
    >
      <div className={styles.imgWrap} aria-hidden={!imgLoaded}>
        {!imgLoaded && <Skeleton className={styles.skeleton} />}
        <img
          src={product.img}
          alt={product.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: imgLoaded ? "block" : "none",
          }}
          onLoad={() => setImgLoaded(true)} 
        />
      </div>

      <div className={styles.cardBody}>
        <h3 id={`title-${product.id}`} className={styles.title}>{product.title}</h3>
        <div id={`desc-${product.id}`} className={styles.row}>
          <div>
            <div className={styles.price}>R$ {product.price.toFixed(2)}</div>
            <div className={styles.stars} aria-hidden="true">{renderStars(product.rating)}</div>
          </div>
          <div>
            <span className={styles.tag} aria-label={`Tag: ${product.tag}`}>{product.tag}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Button
            variant="solid"
            onClick={handleAdd} 
            aria-label={`Adicionar ${product.title} ao carrinho`}
            disabled={loading} 
          >
            {loading ? "Adicionando..." : "Adicionar"}
          </Button>
        </div>
      </div>
    </article>
  );
}


ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
  onAdd: PropTypes.func,
};