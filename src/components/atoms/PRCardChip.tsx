import { TrendingUp } from "lucide-react";
const PRCardChip = () => {
  return (
    <div className="flex w-fit h-fit px-2 py-1 gap-1 bg-[#117133] text-white rounded-2xl">
      <div className="flex justify-center items-center w-4 h-4">
        <TrendingUp />
      </div>
      <p className="text-xs">+10kg</p>
    </div>
  );
};

export default PRCardChip;
