import { Plus, CalendarSync, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MainAddButton = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePlusButtonClick = () => {
    setIsRotated((prev) => !prev);
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setIsVisible(false);
        setIsExpanded(false);
        setIsRotated(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.button
      id="addButtonBG"
      className={`fixed z-40 bottom-4 left-1/2 transform -translate-x-1/2 w-[108px] bg-gray-900/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-40"
      }`}
      animate={{
        height: isExpanded ? 328 : 108,
      }}
      transition={{
        type: "spring",
        duration: 0,
      }}
    >
      {isExpanded && (
        <motion.div
          className="absolute bottom-[116px] flex flex-col gap-3 w-full items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.32 }}
        >
          <motion.div className="w-24 h-24 bg-white rounded-full text-red-600 flex items-center justify-center">
            <Dumbbell size={24} strokeWidth={2.2} />
          </motion.div>
          <motion.div className="w-24 h-24 bg-white rounded-full text-red-600 flex items-center justify-center">
            <CalendarSync size={24} strokeWidth={2.2} />
          </motion.div>
        </motion.div>
      )}

      <motion.div
        className={`absolute bottom-[6px] w-24 h-24 rounded-full text-white flex items-center justify-center ${
          isExpanded ? "bg-red-600" : "bg-black"
        }`}
        animate={{
          rotate: isRotated ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 20,
          duration: 0.2,
        }}
        onClick={handlePlusButtonClick}
      >
        <Plus size={36} strokeWidth={2.2} />
      </motion.div>
    </motion.button>
  );
};

export default MainAddButton;
