import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const variants = {
  solid: css`
    background: ${({ theme }) => theme.primary};
    color: #fff;
    border: 1px solid transparent;
  `,
  outline: css`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  `,
  ghost: css`
    background: transparent;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.primary};
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space2};
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  ${({ variant }) => variants[variant]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default function Button({ children, variant = "solid", ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["solid", "outline", "ghost"]),
};
