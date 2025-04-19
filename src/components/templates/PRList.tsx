import { ListFilter } from "lucide-react";
import RecentPRCard from "../organisms/RecentPRCard";

const PRList = () => {
  return (
    <div className="flex flex-col w-full gap-2 mt-4 h-fit">
      <div className="flex justify-between pr-3">
        <p className="text-white px-3 text-2xl self-center text-center font-light font-lufga">
          Recent PRs
        </p>
        <button className="flex h-fit w-fit py-1 px-2 gap-1 items-center border border-[#323236] rounded-2xl text-[#d2d2d2]">
          <ListFilter className="w-4" />
          <p className="text-sm font-light">Filter</p>
        </button>
      </div>
      <div className="flex flex-col px-3 gap-2">
        <RecentPRCard
          ExerciseName="Deadlift Conventional"
          Day="Today"
          Weight={105}
          Reps={3}
        />
        <RecentPRCard
          ExerciseName="Deadlift Conventional"
          Day="Today"
          Weight={105}
          Reps={3}
        />
      </div>
    </div>
  );
};

export default PRList;
