import { ButtonHTMLAttributes, FC } from "react";

import "./button.styles.scss";

export enum BUTTON_TYPE_CLASSES {
  base = "button-container",
  google = "google-sign-in",
  inverted = "inverted",
}

type ButtonProps = {
  children: React.ReactNode;
  buttonType: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType = BUTTON_TYPE_CLASSES.base,
  ...otherProps
}) => {
  console.log(buttonType);
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
