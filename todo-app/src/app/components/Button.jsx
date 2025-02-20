import React from "react";

export const Button = ({ buttonName, className }) => {
  return (
    <button className={` px-3  rounded-md text-[14px] ` + className}>
      {buttonName}
    </button>
  );
};
