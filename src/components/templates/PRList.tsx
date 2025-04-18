import RecentPRCard from "../organisms/RecentPRCard";

const PRList = () => {
  return (
    <div className="flex flex-col w-full gap-2 mt-4 h-fit">
      <div className="text-white px-3 text-2xl font-light font-lufga">
        Recent PRs
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
