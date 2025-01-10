import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MainAddButton = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => {
    setIsRotated((prev) => !prev);
  };

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

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[108px] h-[108px] bg-gray-900/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-60"
      }`}
      onClick={handleClick}
    >
      <motion.div
        className="w-24 h-24 bg-black rounded-full text-white flex items-center justify-center"
        animate={{
          rotate: isRotated ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 20,
          duration: 0.3,
        }}
      >
        <Plus size={36} strokeWidth={2.2} />
      </motion.div>
    </div>
  );
};

export default MainAddButton;
