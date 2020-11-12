import styled from "styled-components";

const buttonVariant = (props) => {
  let backgroundColor, color;

  switch (props.variant) {
    case "default":
      backgroundColor = props.theme.silver;
      color = props.theme.black;
      break;
    case "primary":
      backgroundColor = props.theme.blue;
      color = props.theme.white;
      break;
    case "success":
      backgroundColor = props.theme.green;
      color = props.theme.white;
      break;
    case "danger":
      backgroundColor = props.theme.red;
      color = props.theme.white;
      break;
    default:
      backgroundColor = props.theme.silver;
      color = props.theme.black;
      break;
  }

  return {
    backgroundColor: backgroundColor,
    color: color,
  };
};

export const StyledButton = styled.button`
  padding: 8px 12px;
  background-color: ${(props) => buttonVariant(props).backgroundColor};
  border: 6px ridge ${(props) => props.theme.silver};
  color: ${(props) => buttonVariant(props).color};
  text-decoration: underline;
  font-family: ${(props) => props.theme.comicSans};
  font-size: 1rem;
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })``;
