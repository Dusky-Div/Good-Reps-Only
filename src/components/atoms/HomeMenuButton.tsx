import FourDots from "/assets/FourDots.svg";
import { useState } from "react";
import { X } from "lucide-react";
import { getAuth, signOut } from "firebase/auth";
const HomeMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const auth = getAuth();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        window.location.href = "/";
      })

      .catch((error) => console.error("Logout error", error));
  };

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
        <div className="flex absolute flex-col text-lg gap-2 bg-lime-500 text-black h-40 w-40 top-16 right-0">
          <p>Hi User</p>
          <button
            className="border w-fit h-fit px-3 border-black rounded-full"
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeMenuButton;
