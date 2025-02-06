import { CalendarSync } from "lucide-react";
import CloseButton from "./atoms/CloseButton";
import { useState } from "react";

const AddSplit = ({ isNotAdded, setIsNotAdded }: any) => {
  return (
    <div className="absolute flex bg-white z-50 w-svw max-w-[410px] min-h-svh p-2 py-8 px-6 mt-24 self-center rounded-t-3xl flex-col">
      <CloseButton onClick={() => setIsNotAdded(false)} />
      <div className="flex text-2xl gap-3 text-[#0A0A0A] font-regular items-center">
        <div className="flex w-12 h-12 bg-[#0A0A0A] rounded-full items-center justify-center">
          <CalendarSync size={24} color="#fff" strokeWidth={2.1} />
        </div>
        <div className="flex">Add a Split</div>
      </div>

      <div className="flex flex-col mt-4 text-[#0A0A0A] font-medium text-lg"></div>

      <div className="flex flex-col w-full h-fit mt-4 mb-2 py-8 px-6 border-2 gap-3 border-[#0A0A0A] rounded-2xl text-white"></div>
    </div>
  );
};

export default AddSplit;
