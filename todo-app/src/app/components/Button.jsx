import React from "react";

export const Button = ({ buttonName, className, filter }) => {
  return (
    <button
      className={`px-3 py-1 rounded-md text-[14px] ` + className}
      onClick={filter}
    >
      {buttonName}
    </button>
  );
};
