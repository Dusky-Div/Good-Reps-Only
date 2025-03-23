import { motion } from "framer-motion";
import { useState } from "react";

const CardOptionButton = ({ color }: any) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col absolute top-2 items-center left-1/2 transform -translate-x-1/2 h-fit w-fit gap-[0.14rem]"
    >
      <motion.div
        className={`flex w-9 h-[0.15rem] ${color} rounded-full`}
        animate={{
          y: isClicked ? -2 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
      ></motion.div>

      <motion.div
        className={`flex w-4 h-[0.15rem] ${color} rounded-full`}
        animate={{
          y: isClicked ? 2 : 0,
        }}
        transition={{
          type: "tween",
          stiffness: 200,
          damping: 10,
        }}
      ></motion.div>
    </div>
  );
};

export default CardOptionButton;
