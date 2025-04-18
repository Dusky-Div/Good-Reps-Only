import PRInputCard from "@/components/templates/PRInputCard";
import PRList from "@/components/templates/PRList";
import { ChevronLeft, Plus } from "lucide-react";
const LogPR = () => {
  return (
    <div className="container flex flex-col bg-[#0A0A0A] mx-auto w-svw max-w-[420px] min-h-svh p-2 gap-1">
      <div className="flex mt-4 text-3xl text-white font- items-center gap-3">
        <button
          className="flex w-16 h-16 bg-[#242424] rounded-full items-center justify-center"
          onClick={() => window.history.back()}
        >
          <div>
            <ChevronLeft className="w-7 h-7" />
          </div>
        </button>
        <p className="font-lufga">Log PR</p>
      </div>
      <div className="flex mt-4 justify-evenly">
        <div className="flex items-center justify-start text-lg py-4 px-5 w-fit self-center text-white border border-[#323236] bg-[#242428] rounded-3xl h-fit">
          <span className="flex flex-col font-extralight text-base leading-5">
            <span className="font-medium font-lufga text-2xl">
              Hit a new high?
            </span>
            Your PR deserves a spot in the log.
          </span>
        </div>
        <button className="flex w-16 h-16 text-white border self-center justify-center items-center border-[#323236] bg-[#242428] rounded-3xl">
          <Plus className="w-7 h-7" />
        </button>
      </div>
      <div className="flex flex-col w-full h-fit mb-2 py-4 px-6 text-white">
        <PRInputCard />
      </div>
      <hr className="w-10/12 self-center border-t border-[#3a3a3d]" />

      <PRList />
    </div>
  );
};

export default LogPR;
