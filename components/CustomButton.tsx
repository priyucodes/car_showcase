"use client"; // make client side component, by default everything in app is server side
import { CustomButtonProps } from "@/types";
import Image from "next/image";
// https://stackoverflow.com/questions/40209352/how-to-specify-optional-default-props-with-typescript-for-stateless-functiona
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
export default CustomButton;
