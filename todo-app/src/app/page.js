import Image from "next/image";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { Task } from "./components/Task";

export default function Home() {
  return (
    <div className="w-full h-[600px] flex items-center justify-center">
      <div className="flex flex-col w-[345px] h-fit items-center gap-3 px-[16px] py-6 box-border bg-[#FFE8E8]">
        <p className="text-black font-semibold text-[20px]">To-Do List</p>
        <div className="flex gap-[6px]">
          <Container />
          <Button className={""}>Add</Button>
        </div>
        <div className="flex gap-[6px]">
          <Button className={"px-3 py-1 bg-[#cacaca] text-black"}>All</Button>
          <Button className={"px-3 py-1 bg-[#cacaca] text-black"}>
            Active
          </Button>
          <Button className={"px-3 py-1 bg-[#cacaca] text-black"}>
            Completed
          </Button>
        </div>
        <Task />
        <Task />
        <div className="flex flex-col gap-10 w-full items-center">
          <div className="flex items-center justify-between w-full pt-4 pb-1 border-t">
            <p className="tetx-[#6B7280] text-[14px]">
              {" "}
              1 of 2 tasks completed
            </p>
            <Button className={"px-3 py-1 bg-transparent text-white"}>
              Clear completed
            </Button>
          </div>
          <div>
            <p className="tetx-[#6b7280] text-[12px]">
              Powered by {""}
              <a
                className="text-[#3b73ed]"
                href="https://pinecone.mn/"
                target="_blank"
              >
                Pinecone academy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
