"use client"; // make client side component, by default everything in app is server side
import { CustomButtonProps } from "@/types";
import Image from "next/image";
// https://stackoverflow.com/questions/40209352/how-to-specify-optional-default-props-with-typescript-for-stateless-functiona
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
export default CustomButton;
