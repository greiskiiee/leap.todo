import React from "react";
import { Button } from "./Button";
import { MdDeleteOutline } from "react-icons/md";

export const Task = () => {
  return (
    <div className="flex items-center justify-between w-full p-2 bg-[#EFF8FF] rounded-md">
      <div className="flex gap-[10px]">
        <input type="checkbox" />
        <p className="text-black font-normal"> Create PR</p>
      </div>
      <Button className="bg-[#FEF2f2] tetx-[#EF4444] px-3 py-[6px]">
        <div>
          <MdDeleteOutline />
        </div>
      </Button>
    </div>
  );
};
