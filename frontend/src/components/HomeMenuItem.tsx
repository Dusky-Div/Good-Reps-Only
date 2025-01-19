// import { IconNode } from "lucide-react";

interface HomeMenuItemProps {
  title: string;
  //   icon: IconNode;
  onClick: () => void;
}

const HomeMenuItem = ({ title, onClick }: HomeMenuItemProps) => {
  return (
    <button
      className="component flex w-52 h-fit px-6 py-4 font-medium text-lg bg-[#242424] rounded-lg"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default HomeMenuItem;
