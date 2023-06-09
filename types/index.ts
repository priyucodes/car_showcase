import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string | string[];
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;

  setManufacturer: (manufacturer: string) => void;
}

// interface specifies how a structure should look like, what variables and values it should have
// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
// https://thisthat.dev/d-ts-vs-ts/
