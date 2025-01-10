import CardLong from "./components/CardLong";
import FourDots from "/assets/FourDots.svg";
import CardRect from "./components/CardRect";
import { motion } from "framer-motion";
import MainAddButton from "./components/MainAddButton";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col bg-[#0A0A0A] mx-auto w-svw max-w-[420px] min-h-svh p-2 gap-1">
        <div className="relative flex w-full h-fit mt-4 text-white font-medium text-3xl justify-between">
          <div className="flex">
            Good Reps
            <br />
            Only
          </div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="flex w-16 h-16 mr-4 bg-[#242424] self-center rounded-full items-center justify-center"
          >
            <img src={FourDots} className="filter invert w-8 h-8" />
          </motion.div>
        </div>
        <div className="flex text-white text-4xl font- mt-10 self-center">
          <span>Track</span>
          <span className="text-red-600 mr-1 font-semibold">.</span>
          <span>Smash</span>
          <span className="text-red-600 mr-1 font-semibold">.</span>
          <span>Repeat</span>
          <span className="text-red-600 font-semibold">.</span>
        </div>
        <div className="flex mb-10 w-[22rem] text-xl self-center text-center text-[#8F8F8F]">
          Manage your split, track your PRs, fuel your progress.
        </div>
        <div className="flex flex-row gap-1">
          <CardLong
            color="bg-[#ED6B3E]"
            rounded="rounded-bl-[3rem] rounded-tr-[3rem] rounded-br-[3rem]"
            title="Today"
            textColor="text-[#401100]"
            heartBg="bg-[#D15D35]"
            heartOut="text-[#401100]"
            heartFill="#401100"
          />
          <CardLong
            color="bg-[#F7D44C]"
            round="rounded-[3rem]"
            title="Yesterday"
            textColor="text-[#392E00]"
            rounded="rounded-tl-[3rem] rounded-tr-[3rem] rounded-bl-[3rem]"
            heartBg="bg-[#E8C748]"
            heartOut="text-[#392E00]"
            heartFill="#392E00"
          />
        </div>
        <div className="flex flex-col gap-1">
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#7C714D]"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#7C714D]"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#7C714D]"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#7C714D]"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#7C714D]"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#7C714D]"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#7C714D]"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#7C714D]"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#7C714D]"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#7C714D]"
          />
        </div>
        <MainAddButton />
      </div>
      <Footer />
    </>
  );
}

export default App;
