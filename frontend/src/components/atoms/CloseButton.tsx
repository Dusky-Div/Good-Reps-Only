import { X } from "lucide-react";
const CloseButton = ({ onClick }: any) => {
  return (
    <button
      className="absolute top-4 right-4 flex w-7 h-7 bg-[#b63131] text-white rounded-full items-center justify-center"
      onClick={onClick}
    >
      <X className="absolute" size={15} strokeWidth={3.5} color="#fff" />
    </button>
  );
};

export default CloseButton;
