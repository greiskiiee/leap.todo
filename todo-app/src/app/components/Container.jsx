import React from "react";

export const Container = ({ handleChange, handleClick }) => {
  return (
    <div className="w-[290px] h-fit flex justify-center gap-[6px] ">
      <input
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        type="text"
        placeholder="Add a new task"
        className="text-[#103714] text-[14px] bg-[#fffdf6] outline-none border font-sans border-grey-200 rounded-md px-4 py-1 min-w-[235px]"
      />
      <button
        onClick={handleClick}
        className={`bg-[#628b34] text-[14px] text-[#fffdf6] px-3 py-2 rounded-md `}
      >
        Add
      </button>
    </div>
  );
};
