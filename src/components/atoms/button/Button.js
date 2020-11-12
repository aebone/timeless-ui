import React from "react";
import PropTypes from "prop-types";
import { StyledButton, StyledLinkButton } from "./Button.styles";

const Button = ({ text, variant, href, onClick }) => {
  if (href) {
    return <StyledLinkButton href={href}>{text}</StyledLinkButton>;
  }
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  text: "Cool Button",
  variant: "default",
};
