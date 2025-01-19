import { X } from "lucide-react";
const CloseButton = ({ onClick }: any) => {
  return (
    <button
      className="absolute top-4 right-4 flex w-6 h-6 bg-red-600 text-white rounded-full items-center justify-center"
      onClick={onClick}
    >
      <X size={14} strokeWidth={3} color="#fff" />
    </button>
  );
};

export default CloseButton;
