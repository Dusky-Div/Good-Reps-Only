import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import AddSplit from "../components/AddSplit";
const MySplits = () => {
  const [isNotAdded, setIsNotAdded] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container flex flex-col bg-[#0A0A0A] mx-auto w-svw max-w-[420px] min-h-svh p-2 gap-1">
      <div className="flex mt-4 text-3xl text-white font- items-center gap-3">
        <div className="flex w-16 h-16 bg-[#242424] rounded-full items-center justify-center">
          <button onClick={() => navigate("/")}>
            <ChevronLeft className="w-7 h-7" />
          </button>
        </div>
        <p>My Splits</p>
      </div>
      <div className="flex text-lg py-8 px-6 mt-4 w-96 self-center flex-col text-[#152607] bg-[#D0E9BC] rounded-3xl">
        <span className="leading-7 font-normal text-2xl">
          <span className="font-semibold">Create</span>
          <span> and </span>
          <span className="font-semibold">manage</span>
          <span> your splits specifying exercises and goals for </span>
          <span className="font-semibold">each day of the week</span>

          <span className="font-semibold leading-7 text-2xl text-red-600">
            .
          </span>
        </span>
      </div>
      <div className="flex text-lg h-fit py-8 px-6 w-96 self-center flex-col text-[#1F1F1F] bg-[#F6F5F8] rounded-3xl gap-2">
        <div className="flex flex-col items-center gap-2">
          <div className="flex bg-gray-300 rounded-2xl w-40 h-40"></div>
          <div className="flex text-4xl font-semibold my-4">
            No splits to show
          </div>
          <Button
            className="mt-2"
            bgColor="bg-[#000]"
            textColor="text-[#fff]"
            text="Add Split"
            onClick={() => {
              console.log("Add Split clicked");
              setIsNotAdded(true);
            }}
          />
        </div>
      </div>
      {isNotAdded && (
        <AddSplit isNotAdded={isNotAdded} setIsNotAdded={setIsNotAdded} />
      )}
    </div>
  );
};

export default MySplits;
