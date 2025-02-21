import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

export const Task = ({ taskName, isDone, deleteBtn, onChange }) => {
  // const [isChecked, setDone] = useState(isDone);
  return (
    <div className="flex items-center justify-between w-full p-2 bg-[#fffdf6] rounded-md">
      <div className="flex gap-[10px]">
        <input type="checkbox" defaultChecked={isDone} onChange={onChange} />
        <p
          className={
            isDone
              ? "line-through text-[#103714] font-normal text-[14px]"
              : "text-[#103714] font-normal text-[14px]"
          }
        >
          {taskName}
        </p>
      </div>
      <button onClick={deleteBtn} className="w-fit px-2 py-[6px] rounded-md">
        <MdDeleteOutline color="#628b34" />
      </button>
    </div>
  );
};
