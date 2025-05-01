import {
  CalendarSync,
  ChartLine,
  Dumbbell,
  House,
  Plus,
  Star,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PlusPopUp from "../molecules/PlusPopUp";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const isHome = pathname === "/";

  const [plusClicked, setPlusClicked] = useState(false);

  return (
    <div className="flex select-none bg-[#e7e7e7]/10 backdrop-blur-lg border border-[#323236] rounded-[1.5rem] py-1 px-3 fixed bottom-3 left-1/2 transform -translate-x-1/2">
      <div className="container relative flex gap-1">
        <button
          className="flex w-16 h-16 justify-center items-center"
          onClick={() => navigate("/my-splits")}
        >
          <Dumbbell
            className="w-6 h-6"
            color={pathname === "/my-splits" ? "#99d918" : "#757575"}
            strokeWidth={2}
          />
        </button>

        <button
          className="flex w-16 h-16 justify-center items-center"
          onClick={() => navigate("/log-pr")}
        >
          <CalendarSync
            className="w-6 h-6"
            color={pathname === "/log-pr" ? "#99d918" : "#757575"}
            strokeWidth={2}
          />
        </button>

        {isHome ? (
          <button
            className={`flex w-14 h-14 mx-2 rounded-full ${
              plusClicked ? "bg-[#FFFEF0]" : "bg-[#99d918]"
            } self-center justify-center items-center`}
            onClick={() => {
              setPlusClicked((prev) => !prev);
            }}
          >
            <Plus
              className={`plus-button w-7 h-7 transform transition-transform duration-300 ${
                plusClicked ? "rotate-45" : "rotate-0"
              }`}
              color={plusClicked ? "#ff3333" : "#000"}
              strokeWidth={2.6}
            />
          </button>
        ) : (
          <button
            className="flex w-14 h-14 mx-2 text-2xl rounded-full border-2 border-[#99d918] self-center justify-center items-center"
            onClick={() => navigate("/")}
          >
            <House
              className="w-6 h-6"
              color={pathname === "/" ? "#99d918" : "white"}
              strokeWidth={2}
            />
          </button>
        )}

        <button
          className="flex w-16 h-16 justify-center items-center"
          onClick={() => navigate("/map")}
        >
          <ChartLine
            className="w-6 h-6"
            color={pathname === "/home" ? "#99d918" : "#757575"}
            strokeWidth={2}
          />
        </button>

        <button
          className="flex w-16 h-16 justify-center items-center"
          onClick={() => navigate("/map")}
        >
          <Star
            className="w-6 h-6"
            color={pathname === "/map" ? "#99d918" : "#757575"}
            strokeWidth={2}
          />
        </button>
      </div>
      <PlusPopUp state={plusClicked} />
    </div>
  );
};

export default BottomNavigation;
