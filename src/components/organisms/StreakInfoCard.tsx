import { LucideIcon } from "lucide-react";

interface StreakInfoCardProps {
  Streak: number;
  Title: string;
  Icon: LucideIcon;
  Theme: Theme;
}
interface Theme {
  color: string;
  glow: string;
}

const StreakInfoCard: React.FC<StreakInfoCardProps> = ({
  Streak,
  Title,
  Icon,
  Theme,
}) => {
  return (
    <button className="flex flex-col w-36 h-36 py-4 px-6 justify-center items-center gap-2 bg-transparent border border-[#323236] rounded-3xl text-white">
      <div className="relative flex">
        <Icon className={`${Theme.color}`} size={28} />
        <div
          className={`absolute inset-1 ${Theme.glow} rounded-full blur-md`}
        ></div>
      </div>
      <div className="flex font-light text-[#888] text-sm">{Title}</div>
      <div className={`flex ${Theme.color} text-xl`}>{Streak} days</div>
    </button>
  );
};

export default StreakInfoCard;
