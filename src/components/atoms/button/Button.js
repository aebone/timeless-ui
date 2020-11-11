import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ text, size, style }) => {
  return (
    <button className={`button button-${size} button-${style}`}>{text}</button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.string,
};

Button.defaultProps = {
  text: "Cool Button",
  size: "medium",
  style: "basic",
};
