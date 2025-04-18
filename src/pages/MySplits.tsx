import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import { useState } from "react";
import AddSplit from "../components/templates/AddSplit";
import SplitList from "@/components/templates/SplitList";
import LogWorkout from "@/components/templates/LogWorkout";
const MySplits = () => {
  const [isNotAdded, setIsNotAdded] = useState(false);
  const [logWorkout, setLogWorkout] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container flex flex-col bg-[#0A0A0A] mx-auto w-svw max-w-[420px] min-h-svh p-2 gap-1">
      <div className="flex mt-4 text-3xl text-white font- items-center gap-3">
        <button
          className="flex w-16 h-16 bg-[#242424] rounded-full items-center justify-center"
          onClick={() => window.history.back()}
        >
          <button>
            <ChevronLeft className="w-7 h-7" />
          </button>
        </button>
        <p className="font-lufga">My Splits</p>
      </div>
      <div className="flex text-lg py-8 px-6 mt-4 w-96 self-center flex-col text-white border border-orange-500 bg-[#553d0d] rounded-3xl">
        <span className="leading-7 font-normal text-2xl">
          <span className="">Create</span>
          <span> and </span>
          <span className="">manage</span>
          <span> your splits specifying exercises and goals for </span>
          <span className="">each day of the week</span>

          <span className="font-semibold leading-7 text-2xl text-red-600">
            .
          </span>
        </span>
      </div>
      <div className="flex text-lg w-96 p-6 self-center rounded-3xl justify-around">
        <div className="">
          <span className="text-xs text-[#0A0A0A] select-none">
            i ain't here boy
          </span>
          <Button
            className="flex"
            bgColor="bg-[#fff]"
            textColor="text-[#000]"
            text="Add Split"
            onClick={() => {
              setIsNotAdded(true);
            }}
          />
        </div>
        <div className="">
          <span className="text-xs text-white">Went off the split today?</span>
          <Button
            className="flex"
            bgColor="bg-[#fff]"
            textColor="text-[#000]"
            text="Log Workout"
            onClick={() => {
              setLogWorkout(true);
            }}
          />
        </div>
      </div>
      <SplitList />
      {isNotAdded && <AddSplit setIsNotAdded={setIsNotAdded} />}
      {logWorkout && <LogWorkout setLogWorkout={setLogWorkout} />}
    </div>
  );
};

export default MySplits;
