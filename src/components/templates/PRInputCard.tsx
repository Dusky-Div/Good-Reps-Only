import { FaDumbbell } from "react-icons/fa6";
import KgRepInput from "../atoms/KgRepInput";
import { Datepicker } from "flowbite-react";
import { Check } from "lucide-react";

interface PRInputCardProps {}

const PRInputCard: React.FC<PRInputCardProps> = ({}) => {
  return (
    <div className="flex flex-col w-full h-full py-4">
      <div className="flex justify-center mb-4">
        <div className="flex gap-2">
          <FaDumbbell className="self-center" color="#fff" size={24} />
          <input
            className="flex h-8 text-lg font-medium text-wrap bg-transparent border-none outline-none placeholder-[#ababab]"
            placeholder={`Exercise`}
            type="text"
          />
        </div>
      </div>

      {/* Table Header */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-around">
          <p className="flex w-9 justify-center">Kg</p>
          <p className="flex w-9 justify-center">Reps</p>
        </div>

        {/* Dynamically Rendered Sets */}
        <div className="inputs flex justify-around mb-4">
          <KgRepInput />
          <KgRepInput />
        </div>

        {/* Custom Datepicker Trigger */}
        <div className="flex self-center w-64 items-center h-fit gap-2">
          <Datepicker
            className="w-full"
            autoHide={false}
            placeholder="Pick date"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
            }}
          />
          <button className="flex w-fit h-fit p-4 text-white self-center justify-center items-center bg-[#1f7fba] rounded-[20px]">
            <p className="text-lg font-medium">
              <Check className="w-6 h-6" />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PRInputCard;
