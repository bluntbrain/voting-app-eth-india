import React from "react";

const Button = ({ children, className, type, disabled, onClick }) => {
  return (
    <button
      className={`w-full p-1 ${type === "primary" && "bg-black text-white"} ${
        type === "secondary" && "bg-gray-100 text-black"
      } ${className} rounded-md cursor-pointer ${
        disabled && "cursor-not-allowed bg-gray-300"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
