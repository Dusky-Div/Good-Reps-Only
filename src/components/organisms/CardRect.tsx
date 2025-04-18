import { Heart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import CardOptionButton from "../atoms/CardOptionButton";

const CardRect = ({
  color,
  title,
  textColor,
  rounded,
  split,
  splitTextColor,
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
      className={`relative w-full h-28 px-6 ${color} ${rounded} flex justify-between items-center`}
    >
      <div className="flex flex-col w-fit my-auto">
        <div className={`font-bold font-lufga text-[22px] ${textColor}`}>
          {title}
        </div>
        <div className={`font-bold font-lufga text-[18px] ${splitTextColor}`}>
          {split}
        </div>
        <CardOptionButton color="bg-[#000]" />
      </div>
      <div
        className={`flex ${heartBg} ${heartOut} w-12 h-12 rounded-full items-center justify-center cursor-pointer`}
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
          <Heart strokeWidth={2.75} fill={isHeartFilled ? heartFill : "none"} />
        </motion.div>
      </div>
    </div>
  );
};

export default CardRect;
