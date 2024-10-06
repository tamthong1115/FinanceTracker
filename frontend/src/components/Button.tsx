import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
