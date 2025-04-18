import PRCardChip from "../atoms/PRCardChip";
import PRCardDataChip from "../atoms/PRCardDataChip";

interface RecentPRCardProps {
  ExerciseName: string;
  Day: string;
  Weight: number;
  Reps: number;
}

const RecentPRCard = ({
  ExerciseName,
  Day,
  Weight,
  Reps,
}: RecentPRCardProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 w-full h-fit px-5 py-4 bg-gradient-to-br from-[#161618] via-[#2e2e33] to-[#141416] border border-[#323236] text-white rounded-3xl">
      <div className="flex justify-between">
        <div className="flex flex-col leading-4 w-2/3">
          <p className="font-lufga text-xl font-medium w-full text-wrap">
            {ExerciseName}
          </p>
          <p className="font-extralight">{Day}</p>
        </div>
        <PRCardChip />
      </div>
      <div className="flex w-full h-fit">
        <div className="flex gap-1 w-2/3">
          <PRCardDataChip Title="Weight" Value={Weight} />
          <PRCardDataChip Title="Reps" Value={Reps} />
        </div>
        <div className="flex flex-col px-4 py-2">
          <div className="flex font-extralight text-sm">Notes</div>
          <div className="flex text-xs">
            Went 1RM but could've gone even more if didn't
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPRCard;
