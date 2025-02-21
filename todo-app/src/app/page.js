"use client";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { Task } from "./components/Task";
import { use, useState } from "react";
import Link from "next/link";

export default function Home() {
  // new values
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
    {
      task: "fold the laundry",
      isDone: true,
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [filtered, setFilteredTasks] = useState(tasks);

  const [isActive, setActive] = useState();

  const [curIdx, setIndex] = useState(0);

  const handleOnClick = (idx) => {
    setIndex(idx);
  };
  //tasks shinechleh
  const handleClick = () => {
    const newTasks = { task: inputValue, isDone: false };
    setTask((tasks) => [...tasks, newTasks]);
    setFilteredTasks((tasks) => [...tasks, newTasks]);
    setInputValue("");
  };

  const doneTasks = () => {
    setFilteredTasks(tasks.filter((task) => task.isDone));
  };

  const showActive = () => {
    setFilteredTasks(tasks.filter((task) => task.isDone == false));
  };

  const showAll = () => {
    setFilteredTasks(tasks);
  };

  const clearCompleted = () => {
    const active = tasks.filter((task) => task.isDone == false);
    setFilteredTasks(active);
    setTask(active);
  };

  const filter = filtered.filter((task) => {
    if (curIdx == 0) return true;
    if (curIdx == 1) return task.isDone == false;
    if (curIdx == 2) return task.isDone == true;
  });

  const handleStatus = (index) => {
    tasks.map((task, i) => {
      if (i === index) {
        task.isDone = !task.isDone;
      }
      return task;
    });
  };
  return (
    <div className="w-full h-[1080px] flex items-center justify-center min-h-[600px] bg-[#d4e2d0] ">
      <div className="flex flex-col w-[345px] h-fit min-h-[400px] items-center gap-3 px-[16px] shadow-custom py-[28px] box-border rounded-xl bg-[#FFE8E8] bg-[url('https://i.pinimg.com/474x/b3/53/9a/b3539aac1f5da45314667f27ffa450cd.jpg')]">
        <p className="text-[#103714] font-semibold text-[18px] bg-[#fffdf6] px-2 rounded-md font-sans">
          ✩ TO-DO LIST ✩
        </p>
        <div className="w-fit flex gap-[6px] pt-3">
          <Container handleChange={setInputValue} handleClick={handleClick} />
        </div>
        <div className="w-[290px] h-fit flex justify-start gap-[6px] py-1">
          <Button
            onClick={() => handleOnClick(0)}
            className={
              curIdx == 0
                ? "bg-[#628b34] text-[#fffdf6]"
                : "bg-[#fffdf6] text-[#103714]"
            }
            buttonName="All"
            filter={() => {
              filter(0);
            }}
          />
          <Button
            onClick={() => handleOnClick(1)}
            className={
              curIdx == 1
                ? "bg-[#628b34] text-[#fffdf6]"
                : "bg-[#fffdf6] text-[#103714]"
            }
            buttonName="Active"
            filter={() => {
              filter(1);
            }}
          />
          <Button
            onClick={() => handleOnClick(2)}
            className={
              curIdx == 2
                ? "bg-[#628b34] text-[#fffdf6]"
                : "bg-[#fffdf6] text-[#103714]"
            }
            buttonName="Completed"
            filter={() => {
              filter(2);
            }}
          />
        </div>
        <div className="w-[290px] h-fit flex flex-col gap-2">
          {filtered.map((obj, i) => {
            return (
              <Task
                onChange={handleStatus}
                key={i}
                taskName={obj.task}
                isDone={obj.isDone}
                deleteBtn={() => {
                  const newTask = filtered.filter((_, index) => index !== i);
                  setTask(newTask);
                  setFilteredTasks(newTask);
                }}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-10 w-[290px] items-center">
          <div className="flex items-center justify-between w-full pt-4 pb-1 border-t">
            <p className="text-[#fffdf6] text-[14px]">
              {tasks.filter((task) => task.isDone).length} of {tasks.length}{" "}
              tasks completed
            </p>
            <Button
              className={"px-3 py-1 bg-transparent text-[#962323]"}
              buttonName="Clear completed"
              filter={clearCompleted}
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
