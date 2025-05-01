import { AnimatePresence, motion } from "framer-motion";
import { CalendarSync, Dumbbell } from "lucide-react";

type PlusPopUpProps = {
  state: boolean;
};

const PlusPopUp = ({ state }: PlusPopUpProps) => {
  return (
    <>
      <AnimatePresence>
        {state && (
          <div className="flex absolute left-1/2 bottom-20 transform -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="flex gap-4"
            >
              <button className="flex w-14 h-14 text-2xl rounded-full border-2 border-[#99d918] self-center justify-center items-center">
                <Dumbbell className="w-5 h-5" color={"white"} strokeWidth={2} />
              </button>
              <button className="flex w-14 h-14 text-2xl rounded-full border-2 border-[#99d918] self-center justify-center items-center">
                <CalendarSync
                  className="w-5 h-5"
                  color={"white"}
                  strokeWidth={2}
                />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlusPopUp;
