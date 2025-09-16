import PropTypes from "prop-types";

export default function Button({ children, variant = "solid", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all duration-200";

  const variants = {
    solid: "bg-primary text-white",
    outline: "bg-transparent border border-primary text-primary",
    ghost: "bg-transparent text-primary",
  };

  const finalClassName = `${baseClasses} ${variants[variant]}`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["solid", "outline", "ghost"]),
};
