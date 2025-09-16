import Button from "./button";
import Skeleton from "./skeleton";
import PropTypes from "prop-types";
import { useState } from "react";

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
      className="bg-card rounded-lg overflow-hidden shadow-md dark:shadow-lg hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-2xl transition-transform duration-200 flex flex-col"
      tabIndex={0}
      aria-labelledby={`title-${product.id}`}
      aria-describedby={`desc-${product.id}`}
    >
      <div className="w-full aspect-square bg-gray-200">
        {!imgLoaded && <Skeleton className="w-full h-full" />}
        <img
          src={product.img}
          alt={product.title}
          loading="lazy"
          className={`w-full h-full object-cover ${
            imgLoaded ? "block" : "hidden"
          }`}
          onLoad={() => setImgLoaded(true)}
        />
      </div>

      <div className="p-3 flex flex-col gap-2 flex-1">
        <h3
          id={`title-${product.id}`}
          className="text-sm font-semibold line-clamp-2"
        >
          {product.title}
        </h3>
        <div
          id={`desc-${product.id}`}
          className="flex items-center justify-between gap-2"
        >
          <div>
            <div className="font-bold">R$ {product.price.toFixed(2)}</div>
            <div className="text-yellow-500 text-sm">
              {renderStars(product.rating)}
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-200 text-yellow-800">
              {product.tag}
            </span>
          </div>
        </div>

        <div className="mt-auto">
          <Button
            variant="solid"
            onClick={handleAdd}
            aria-label={`Adicionar ${product.title} ao carrinho`}
            disabled={loading}
            className="w-full"
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
