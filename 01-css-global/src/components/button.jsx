import PropTypes from "prop-types";

export default function Button({ children, variant = "solid", onClick, disabled = false, ...props }) {
  const cls = `btn ${variant === "solid" ? "btn-solid" : variant === "outline" ? "btn-outline" : "btn-ghost"}`;
  return (
    <button
      className={cls}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["solid", "outline", "ghost"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};