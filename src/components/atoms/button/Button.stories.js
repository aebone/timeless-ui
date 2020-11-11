import React from "react";
import Button from "./Button";

export const basic = () => (
  <Button type={"basic"} size={"medium"} text={"Hi"} />
);

export default {
  component: Button,
  title: "Button",
};
