import Map from "@/components/Map";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Heatmap = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex flex-col bg-[#0A0A0A] mx-auto w-svw max-w-[420px] min-h-svh p-2 gap-1">
      <div className="flex mt-4 text-3xl text-white font- items-center gap-3">
        <button
          className="flex w-16 h-16 bg-[#242424] rounded-full items-center justify-center"
          onClick={() => navigate("/")}
        >
          <div>
            <ChevronLeft className="w-7 h-7" />
          </div>
        </button>
        <p>Streak Heatmap</p>
      </div>
      <div className="flex text-lg py-8 px-6 mt-4 w-96 self-center gap-1 text-[#152607] bg-[#282828] rounded-3xl">
        <Map />
        <Map />
        <Map />
      </div>
    </div>
  );
};

export default Heatmap;
