import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";
import Skeleton from "./Skeleton";

const CardWrapper = styled.article`
  background: ${({ theme }) => theme.card};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: ${({ theme }) => theme.transition};
  display: flex;
  flex-direction: column;

  &:hover,
  &:focus-within {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadowElev};
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #f3f4f6;
  position: relative;
`;

const CardBody = styled.div`
  padding: ${({ theme }) => theme.space3};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space2};
  flex: 1;
`;

const Title = styled.h3`
  font-size: 0.95rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.text};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.div`
  font-weight: 700;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 999px;
  background: #fef3c7;
  color: #92400e;
`;

const Stars = styled.div`
  color: #f59e0b;
  font-size: 0.9rem;
`;

const Actions = styled.div`
  margin-top: auto;
`;

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
    onAdd();
  };

  return (
    <CardWrapper>
      <ImgWrap>
        {!imgLoaded && <Skeleton />}
        <img
          src={product.img}
          alt={product.title}
          loading="lazy"
          style={{
            display: imgLoaded ? "block" : "none",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onLoad={() => setImgLoaded(true)}
        />
      </ImgWrap>
      <CardBody>
        <Title>{product.title}</Title>
        <Row>
          <div>
            <Price>R$ {product.price.toFixed(2)}</Price>
            <Stars>{renderStars(product.rating)}</Stars>
          </div>
          <Tag>{product.tag}</Tag>
        </Row>
        <Actions>
          <Button
            variant="solid"
            onClick={handleAdd}
            disabled={loading}
            style={{ width: "100%" }}
          >
            {loading ? "Adicionando..." : "Adicionar"}
          </Button>
        </Actions>
      </CardBody>
    </CardWrapper>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
};
