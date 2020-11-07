import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ text, size, type }) => {
  return <button className={`button ${size} ${type}`}>{text}</button>;
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  text: "Cool Button",
  size: "medium",
  type: "default",
};
