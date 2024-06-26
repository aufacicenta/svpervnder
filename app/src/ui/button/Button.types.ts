import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type ButtonCommonProps = {
  children: ReactNode;
  color?: "primary" | "secondary" | "success" | "danger" | "dark" | "light" | "info";
  // auto size means m on destkop and xs on mobile
  size?: "xs" | "s" | "m" | "l" | "auto";
  variant?: "contained" | "outlined" | "inverted" | "text" | "gradient" | "glass";
  isLoading?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  fullWidth?: boolean;
  animate?: "pulse";
  respectCase?: boolean;
};

export type AnchorButtonProps = Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  "ref"
> & {
  disabled?: undefined;
  type?: undefined;
  as: "a";
};

export type LinkButtonProps = Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  "ref"
> & {
  disabled?: undefined;
  type?: undefined;
  as: "link";
};

export type DefaultButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "ref"
> & {
  as?: "button";
  href?: undefined;
};

export type ButtonProps = ButtonCommonProps & (AnchorButtonProps | DefaultButtonProps | LinkButtonProps);
