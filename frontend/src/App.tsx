import CardLong from "./components/CardLong";
import CardRect from "./components/CardRect";
import MainAddButton from "./components/MainAddButton";
import Footer from "./components/Footer";
import HomeMenuButton from "./components/HomeMenuButton";
import BottomNav from "./components/BottomNav";
import { AuroraText } from "./components/aurora-text";

function App() {
  return (
    <>
      <div className="flex flex-col bg-[#0A0A0A] mx-auto w-svw max-w-[420px] min-h-svh p-2 gap-1">
        <div className="relative flex w-full h-fit mt-4 text-white font-medium text-3xl items-center justify-between">
          <div className="flex">
            Good Reps
            <br />
            Only
          </div>
          <HomeMenuButton />
        </div>
        <div className="flex text-white text-3xl mt-10 self-center">
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
            color="bg-[#7678ed]"
            rounded="rounded-bl-[3rem] rounded-tr-[3rem] rounded-br-[3rem]"
            title="Today"
            textColor="text-[#161635]"
            heartBg="bg-[#6E70E4]"
            heartOut="text-[#161635]"
            heartFill="#161635"
          />
          <CardLong
            color="bg-[#F7D44C]"
            rounded="rounded-tl-[3rem] rounded-tr-[3rem] rounded-bl-[3rem]"
            title="Yesterday"
            textColor="text-[#392E00]"
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
            splitTextColor="text-[#6C6346]"
            heartBg="bg-[#E0D5B3]"
            heartOut="text-[#6C6346]"
            heartFill="#6C6346"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#6C6346]"
            heartBg="bg-[#E0D5B3]"
            heartOut="text-[#6C6346]"
            heartFill="#6C6346"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#6C6346]"
            heartBg="bg-[#E0D5B3]"
            heartOut="text-[#6C6346]"
            heartFill="#6C6346"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#6C6346]"
            heartBg="bg-[#E0D5B3]"
            heartOut="text-[#6C6346]"
            heartFill="#6C6346"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#6C6346]"
            heartBg="bg-[#E0D5B3]"
            heartOut="text-[#6C6346]"
            heartFill="#6C6346"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#6C6346]"
            heartBg="bg-[#E0D5B3]"
            heartOut="text-[#6C6346]"
            heartFill="#6C6346"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#6C6346]"
            heartBg="bg-[#E0D5B3]"
            heartOut="text-[#6C6346]"
            heartFill="#6C6346"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#6C6346]"
            heartBg="bg-[#E0D5B3]"
            heartOut="text-[#6C6346]"
            heartFill="#6C6346"
          />
          <CardRect
            color="bg-[#F6EBC9]"
            round="rounded-[3rem]"
            title="7 Jan"
            textColor="text-[#000]"
            rounded="rounded-[3rem]"
            split="PPL"
            splitTextColor="text-[#6C6346]"
            heartBg="bg-[#E0D5B3]"
            heartOut="text-[#6C6346]"
            heartFill="#6C6346"
          />
        </div>
        <MainAddButton />
        <BottomNav />
      </div>
      <Footer />
    </>
  );
}

export default App;
