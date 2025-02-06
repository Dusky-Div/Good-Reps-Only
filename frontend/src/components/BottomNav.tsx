import { CalendarSync, ChartLine, Dumbbell, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navigate = useNavigate();

  return (
    <div
      className={`parent flex z-20 w-svw max-w-[420px] justify-between px-2 fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-300 font-medium ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-80"
      }`}
    >
      <div className="h-fit p-1 bg-gray-900/10 backdrop-blur-sm rounded-2xl flex gap-3 items-center justify-around">
        <button
          className="flex flex-col items-center justify-center w-14 h-14 p-1 bg-white text-[#242424] rounded-2xl text-xs gap-1"
          onClick={() => {
            navigate("/my-splits");
          }}
        >
          <Dumbbell className="w-5 h-5" />
          Splits
        </button>
        <button className="flex flex-col items-center justify-center w-14 h-14 p-1 bg-white text-[#242424] rounded-2xl text-xs gap-1">
          <CalendarSync className="w-5 h-5" />
          PRs
        </button>
      </div>
      <div className="h-fit p-1 bg-gray-900/10 backdrop-blur-sm rounded-2xl flex gap-3 items-center justify-around">
        <button className="flex flex-col items-center justify-center w-14 h-14 p-1 bg-white text-[#242424] rounded-2xl text-xs gap-1">
          <ChartLine className="w-5 h-5" />
          Stats
        </button>
        <button className="flex flex-col items-center justify-center w-14 h-14 p-1 bg-white text-[#242424] rounded-2xl text-xs gap-1">
          <Star className="w-5 h-5" />
          Map
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
