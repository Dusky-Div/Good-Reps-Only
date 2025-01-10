import { Heart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const CardLong = ({
  color,
  title,
  textColor,
  rounded,
  heartBg,
  heartOut,
  heartFill,
}: any) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled((prev) => !prev);
  };

  return (
    <div
      className={`w-1/2 h-72 p-3 ${color} bg-[url(./assets/YellowCardSquiggle.svg)] ${rounded}`}
    >
      <div className="flex justify-between items-center mt-3">
        <div className={`flex font-bold text-xl ${textColor} w-7/12`}>
          {title}
        </div>
        <div
          className={`flex ${heartBg} ${heartOut} w-12 h-12 rounded-full items-center justify-center cursor-pointer`} // Added cursor-pointer for clickability
          onClick={handleHeartClick}
        >
          <motion.div
            animate={{
              scale: isHeartFilled ? 1.1 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 5,
            }}
          >
            <Heart
              strokeWidth={2.75}
              fill={isHeartFilled ? heartFill : "none"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CardLong;
