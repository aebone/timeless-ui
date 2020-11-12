import React from "react";
import Button from "./Button";

export const basicButton = () => (
  <Button type={"basic"} size={"medium"} text={"Basic Button"} />
);
export const functionalButton = () => (
  <Button onClick={null} text={"Functional Button"} />
);

export const linkedButton = () => (
  <Button href="/route" text={"Linked Button"} />
);

export default {
  component: Button,
  title: "Button",
};
