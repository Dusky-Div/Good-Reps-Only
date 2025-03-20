import { useState } from "react";
import { CalendarSync, Plus } from "lucide-react";
import CloseButton from "./atoms/CloseButton";
import { FaDumbbell } from "react-icons/fa6";
import AddSetExButton from "./atoms/AddSetExButton";
import ExerciseInputCard from "./templates/ExerciseInputCard";

const AddSplit = ({ isNotAdded, setIsNotAdded }: any) => {
  const [exercises, setExercises] = useState<number[]>([]); // Track exercise indexes

  const addExercise = () => {
    setExercises((prev) => [...prev, prev.length + 1]); // Index starts from 1
  };

  const removeExercise = (indexToRemove: number) => {
    setExercises((prev) => prev.filter((index) => index !== indexToRemove));
  };

  return (
    <div className="absolute flex bg-[#1E1E1E] z-50 w-svw max-w-[410px] text-white min-h-svh p-2 py-8 px-6 mt-24 self-center rounded-t-3xl flex-col">
      <CloseButton onClick={() => setIsNotAdded(false)} />
      <div className="flex text-2xl gap-3 text-[#0A0A0A] font-regular items-center">
        <div className="flex w-12 h-12 border-2 border-[#fff] rounded-full items-center justify-center">
          <CalendarSync size={24} color="#fff" strokeWidth={2.1} />
        </div>
        <div className="flex text-white">Add a split</div>
      </div>

      <div className="flex flex-col mt-4 text-[#0A0A0A] font-medium text-lg"></div>

      <div className="flex flex-col w-full h-fit mb-2 py-4 px-6 text-white">
        <input
          className="flex h-12 text-2xl font-medium text-wrap bg-transparent border-none outline-none placeholder-[#ababab]"
          placeholder="Name your split"
          type="text"
        />

        {/* Placeholder Message (Appears when no exercises exist) */}
        {exercises.length === 0 && (
          <div className="flex flex-col my-4 justify-center items-center text-center gap-2 h-fit w-full">
            <FaDumbbell color="#ababab" size={55} />
            <p className="flex text-[#8d8d8d]">
              Get started by adding an exercise to your routine.
            </p>
          </div>
        )}

        {/* Render Exercise Cards */}
        {exercises.map((index) => (
          <ExerciseInputCard
            key={index}
            index={index} // Pass correct exercise index
            removeExercise={() => removeExercise(index)} // Pass delete function
          />
        ))}

        {/* Add Exercise Button */}
        <AddSetExButton
          icon={<Plus strokeWidth={2.2} />}
          className="w-full bg-[#4649C6]"
          title="Add exercise"
          onClick={addExercise}
        />
      </div>
    </div>
  );
};

export default AddSplit;
