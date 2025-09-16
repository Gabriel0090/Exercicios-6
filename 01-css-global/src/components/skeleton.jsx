import PropTypes from "prop-types";

Skeleton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
export default function Skeleton({ className = "", style }) {
  return <div className={`skeleton ${className}`} style={style} aria-hidden="true" />;
}
