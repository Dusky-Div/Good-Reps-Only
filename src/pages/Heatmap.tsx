import { ChevronLeft, ChevronRight, Flame, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  format,
  startOfMonth,
  getDaysInMonth,
  getDay,
  addMonths,
  subMonths,
} from "date-fns";
import StreakInfoCard from "@/components/organisms/StreakInfoCard";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

const Heatmap = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  const start = startOfMonth(currentDate);
  const daysInMonth = getDaysInMonth(currentDate);
  const firstWeekday = getDay(start); // Sunday = 0, Monday = 1, etc.

  const calendarDays = [];

  // Add blank days before the first day of the month
  for (let i = 0; i < firstWeekday; i++) {
    calendarDays.push(null);
  }

  // Add actual days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <div className="container flex flex-col bg-[#0A0A0A] mx-auto w-svw max-w-[420px] min-h-svh p-2 gap-4">
      <div className="flex mt-4 text-3xl text-white items-center gap-3">
        <button
          className="flex w-16 h-16 bg-[#242424] rounded-full items-center justify-center"
          onClick={() => navigate("/")}
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <p>Streak Heatmap</p>
      </div>
      <div className="flex h-fit w-full justify-center gap-4">
        <StreakInfoCard
          Title="Current"
          Streak={7}
          Icon={Flame}
          Theme={{ color: "text-[#a0f000]", glow: "bg-[#a0f000]/80" }}
        />
        <StreakInfoCard
          Title="Longest"
          Streak={25}
          Icon={Trophy}
          Theme={{ color: "text-[#ff7300]", glow: "bg-[#ff7300]/80" }}
        />
      </div>
      <div className="calendar flex text-lg flex-col p-6 w-96 self-center gap-4 text-white border border-[#323236] bg-[#17181C] rounded-3xl">
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevMonth}
            className="text-white h-fit w-fit text-md rounded-md border border-[#323236] bg-[#242428] p-1"
          >
            <ChevronLeft className="w-6" />
          </button>
          <h2 className="text-white font-light font-lufga text-xl">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <button
            onClick={handleNextMonth}
            className="text-white h-fit w-fit text-md rounded-md border border-[#323236] bg-[#242428] p-1"
          >
            <ChevronRight className="w-6" />
          </button>
        </div>

        {/* Days of the week header */}
        <div className="grid grid-cols-7 gap-2 text-center text-sm font-lufga font-extralight text-[#888]">
          {daysOfWeek.map((day, idx) => (
            <div key={idx}>{day}</div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, idx) => (
            <button
              key={idx}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm
                ${
                  day
                    ? "bg-transparent border border-[#323236] font-lufga text-white"
                    : ""
                }`}
            >
              {day || ""}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heatmap;
