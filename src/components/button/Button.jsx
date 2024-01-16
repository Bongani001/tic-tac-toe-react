import React from "react";
import { ButtonWrapper } from "./Button.stayled";

const Button = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

export default Button;
