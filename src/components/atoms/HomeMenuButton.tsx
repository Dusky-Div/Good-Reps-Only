import FourDots from "/assets/FourDots.svg";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import HomeMenuItem from "../molecules/HomeMenuItem";
import { useNavigate } from "react-router-dom";

const HomeMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navigate = useNavigate();

  return (
    <div className="flex absolute right-4 w-fit h-fit items-center justify-center">
      <button
        className={`button flex w-16 h-16 z-50 rounded-full items-center justify-center ${
          isOpen ? "bg-white" : "bg-[#242424]"
        }`}
        onClick={handleClick}
      >
        {isOpen ? (
          <X strokeWidth={2.8} className="w-7 h-7 text-red-600" />
        ) : (
          <img src={FourDots} className="filter invert w-8 h-8" />
        )}
      </button>

      {isOpen && (
        <div
          className="flex absolute z-40 -top-7 -right-6 w-svw max-w-[420px] min-h-svh bg-black"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div className="flex absolute h-fit w-fit right-0 top-20 z-40 flex-col gap-1">
          <HomeMenuItem
            title="My Splits"
            onClick={() => {
              navigate("/my-splits");
            }}
          />
          <HomeMenuItem
            title="My PRs"
            onClick={() => {
              navigate("/my-prs");
            }}
          />
          <HomeMenuItem
            title="PR Analytics"
            onClick={() => {
              navigate("/pr-analytics");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HomeMenuButton;
