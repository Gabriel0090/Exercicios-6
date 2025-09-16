import PropTypes from "prop-types";
import styles from "./Button.module.css"; 

export default function Button({ children, variant = "solid", ...props }) {
  const variantClass = styles[variant]; 
  const finalClassName = `${styles.btn} ${variantClass}`;

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