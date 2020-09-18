import React from "react";

import "../styles/button.css";
import "../sizes/button.css";
import { useBreakpoint } from "../../Hooks/useBreakpoint";
//const search = require("../images/search.png");

/*interface buttonProps {
  buttonLabel: any;
  type: "button" | "reset" | "submit";
  onClick: () => {} | void;
  buttonStyles: string;
  buttonSize?: string;
  disabled?: boolean;
}*/

const styles = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--warning--outline",
];

const sizes = ["btn--medium", "btn--large", ".btn--small"];

export const Button = (props) => {
  let checkButtonStyle = styles.includes(props.buttonStyles)
    ? props.buttonStyles
    : styles[0];

  let checkButtonLabel = props.buttonLabel;
  let buttonSize = "";
  const breakPoint = useBreakpoint();
  breakPoint == "lg" ? (buttonSize = "btn--medium") : (buttonSize = sizes[2]);

  props.disabled
    ? (checkButtonStyle = "btn--primary--disabled") &&
      (checkButtonLabel = "Disabled")
    : (checkButtonStyle = styles[0]);

  return (
    <a
      onClick={props.onClick}
      type={props.type}
      className={`btn ${buttonSize} ${checkButtonStyle}`}
      href={props.href}
    >
      {checkButtonLabel}
    </a>
  );
};
