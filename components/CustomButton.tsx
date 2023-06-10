"use client"; // make client side component, by default everything in app is server side
import { CustomButtonProps } from "@/types";
import Image from "next/image";
// https://stackoverflow.com/questions/40209352/how-to-specify-optional-default-props-with-typescript-for-stateless-functiona
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
export default CustomButton;
