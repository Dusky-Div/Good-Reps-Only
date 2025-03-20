import { FaDumbbell } from "react-icons/fa6";
import { Trash2, Plus } from "lucide-react";
import { useState } from "react";
import KgRepInput from "../atoms/KgRepInput";
import SetInput from "../atoms/SetInput";
import AddSetExButton from "../atoms/AddSetExButton";

interface ExerciseInputCardProps {
  index: number; // Exercise index (starts from 1)
  removeExercise: () => void; // Function to remove this exercise
}

const ExerciseInputCard: React.FC<ExerciseInputCardProps> = ({
  index,
  removeExercise,
}) => {
  const [setCount, setSetCount] = useState(1);

  return (
    <div className="flex flex-col w-full h-full py-4">
      {/* Exercise Name Input */}
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <FaDumbbell className="self-center" color="#fff" size={24} />
          <input
            className="flex h-8 text-lg font-medium text-wrap bg-transparent border-none outline-none placeholder-[#ababab]"
            placeholder={`Exercise ${index}`}
            type="text"
          />
        </div>
        <Trash2
          color="#b63131"
          className="self-center cursor-pointer"
          strokeWidth={2.2}
          size={22}
          onClick={removeExercise} // Delete this exercise
        />
      </div>

      {/* Table Header */}
      <div className="flex flex-col">
        <div className="flex justify-around">
          <p className="flex w-9 justify-center">Set</p>
          <p className="flex w-9 justify-center">Kg</p>
          <p className="flex w-9 justify-center">Reps</p>
        </div>

        {/* Dynamically Rendered Sets */}
        {[...Array(setCount)].map((_, i) => (
          <div key={i} className="inputs flex justify-around mb-2">
            <SetInput setNumber={i + 1} />
            <KgRepInput />
            <KgRepInput />
          </div>
        ))}

        {/* Add & Delete Set Buttons */}
        <div className="flex gap-3">
          <AddSetExButton
            icon={<Trash2 size={24} strokeWidth={2.2} />}
            className="delete w-1/2 self-center border-2 text-[#b63131] border-[#b63131] bg-transparent"
            title="Delete set"
            onClick={() => setSetCount((prev) => Math.max(1, prev - 1))}
          />
          <AddSetExButton
            icon={<Plus strokeWidth={2.2} />}
            className="w-1/2 self-center border-2 border-[#4649C6] bg-transparent"
            title="Add set"
            onClick={() => setSetCount((prev) => prev + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseInputCard;
