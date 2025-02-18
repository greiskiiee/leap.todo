import React from "react";

export const Button = ({ children, className }) => {
  return (
    <button className={`bg-[#FFB2AE] px-4 py-2 rounded-md ` + className}>
      {children}
    </button>
  );
};
