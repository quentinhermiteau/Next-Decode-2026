import { MouseEventHandler } from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "destructive" | "default";
};

const variants = {
  default: "bg-primary text-white hover:bg-primary/80",
  destructive: "bg-red-500 text-white hover:bg-red-500/80",
};

export default function Button({
  children,
  onClick,
  variant = "default",
}: ButtonProps) {
  return (
    <button
      className={`py-4 px-8 min-w-8  font-bold rounded-full cursor-pointer hover:bg-primary/80 ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
