import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string | string[];
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
// interface specifies how a structure should look like, what variables and values it should have
