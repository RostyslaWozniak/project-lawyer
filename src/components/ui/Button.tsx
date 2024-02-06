import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};
const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `min-w-52 border-2 border-accent bg-accent py-2 text-sm text-light duration-300 md:text-lg`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
