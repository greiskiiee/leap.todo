"use client";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { Task } from "./components/Task";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [tasks, setTask] = useState([
    {
      task: "Do laundry",
      isDone: false,
    },
    {
      task: "Assignment csm314",
      isDone: true,
    },
    {
      task: "Assignment csm201",
      isDone: true,
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setTask((tasks) => [...tasks, { task: inputValue, isDone: false }]);
  };

  // const done = function (tasks) {
  //   tasks.forEach((task) => {
  //     if (task.isDone === true) return task;
  //   });
  // };

  const done = (tasks) => {
    tasks.filter((task) => {
      return task.isDone === true;
    });
  };

  return (
    <div className="w-full h-[1080px] flex items-center justify-center min-h-[600px] bg-[#d4e2d0] ">
      <div className="flex flex-col w-[345px] h-fit min-h-[400px] items-center gap-3 px-[16px] shadow-custom py-[28px] box-border rounded-lg bg-[#FFE8E8] bg-[url('https://i.pinimg.com/474x/b3/53/9a/b3539aac1f5da45314667f27ffa450cd.jpg')]">
        <p className="text-[#103714] font-semibold text-[18px] bg-[#fffdf6] px-2 rounded-md font-sans">
          ✩ TO-DO LIST ✩
        </p>
        <div className="w-fit flex gap-[6px] pt-3">
          <Container handleChange={setInputValue} handleClick={handleClick} />
        </div>
        <div className="w-[290px] h-fit flex justify-start gap-[6px] py-1">
          <Button
            className={"px-3 py-1 bg-[#fffdf6] text-black"}
            buttonName="All"
          />
          <Button
            className={"px-3 py-1 bg-[#fffdf6] text-black"}
            buttonName="Active"
          />
          <Button
            className={"px-3 py-1 bg-[#628b34] text-[#fffdf6]"}
            buttonName="Completed"
          />
        </div>
        <div className="w-[290px] h-fit flex flex-col gap-2">
          {tasks.map((obj, i) => {
            return (
              <Task
                key={i}
                taskName={obj.task}
                isDone={obj.isDone}
                deleteBtn={() => {
                  setTask(() => {
                    return tasks.filter((el, index) => index !== i);
                  });
                }}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-10 w-[290px] items-center">
          <div className="flex items-center justify-between w-full pt-4 pb-1 border-t">
            <p className="text-[#fffdf6] text-[14px]">
              {done.length} of {tasks.length} tasks completed
            </p>
            <Button
              className={"px-3 py-1 bg-transparent text-[#962323]"}
              buttonName="Clear completed"
            />
          </div>
          <div className="">
            <p className="text-[#fffdf6] text-[12px]">
              Powered by {""}
              <Link
                className="text-[#d9f5bc]"
                href="https://pinecone.mn/"
                target="_blank"
              >
                Pinecone academy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
