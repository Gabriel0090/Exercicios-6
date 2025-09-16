import PropTypes from "prop-types";

export default function Skeleton({ className = "" }) {
  return (
    <div
      className={`bg-gray-200 animate-pulse ${className}`}
      aria-hidden="true"
    />
  );
}

Skeleton.propTypes = {
  className: PropTypes.string,
};