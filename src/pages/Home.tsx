import CardLong from "../components/organisms/CardLong";
import CardRect from "../components/organisms/CardRect";
import Footer from "../components/templates/Footer";
import HomeMenuButton from "../components/atoms/HomeMenuButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";
function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col bg-[#0A0A0A] mx-auto w-svw max-w-[420px] min-h-svh p-2 gap-1">
        <div className="relative flex w-full h-fit mt-4 text-white font-medium text-3xl items-center justify-between">
          <div className="flex font-lufga">
            Good Reps
            <br />
            Only
          </div>

          {user ? (
            <HomeMenuButton />
          ) : (
            <div className="gap-2 flex">
              {" "}
              <button
                className="flex items-center justify-center px-4 py-2 border border-[#323236] text-[#a0f000] text-base font-medium rounded-2xl"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
              <button
                className="flex items-center justify-center px-4 py-2 bg-[#fffef0] border text-[#000000] text-base font-medium rounded-2xl"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log in
              </button>
            </div>
          )}
        </div>

        <div className="flex text-white font-lufga font-medium text-3xl mt-10 self-center">
          <span>Track</span>
          <span className="text-red-600 mr-1">.</span>
          <span>Smash</span>
          <span className="text-red-600 mr-1">.</span>
          <span>Repeat</span>
          <span className="text-red-600">.</span>
        </div>
        <div className="flex mb-10 w-[22rem] font-light text-xl self-center text-center text-[#8F8F8F]">
          Manage your split, track your PRs, fuel your progress.
        </div>
        <div className="flex flex-row gap-1">
          <CardLong
            color=" bg-[#e7e7e7]/10 backdrop-blur-lg border border-[#323236]"
            rounded="rounded-bl-[3rem] rounded-tr-[3rem] rounded-br-[3rem]"
            title="Today"
            textColor="text-[#fff]"
            heartBg="bg-[#E8C748]"
            heartOut="text-[#392E00]"
            heartFill="#392E00"
          />
          <CardLong
            color=" bg-[#e7e7e7]/10 backdrop-blur-lg border border-[#323236]"
            rounded="rounded-tl-[3rem] rounded-tr-[3rem] rounded-bl-[3rem]"
            title="Yesterday"
            textColor="text-[#fff]"
            heartBg="bg-[#E8C748]"
            heartOut="text-[#392E00]"
            heartFill="#392E00"
          />
        </div>
        <div className="flex flex-col gap-1">
          <CardRect
            color="bg-transparent"
            title="7 Jan"
            textColor="text-[#fff]"
            rounded="rounded-3xl"
            split="PPL"
            splitTextColor="text-[#fff]"
            heartBg="bg-[#242428]"
            heartOut="text-[#a0f000]"
            heartFill="#a0f000"
          />
          <CardRect
            color="bg-transparent"
            title="7 Jan"
            textColor="text-[#fff]"
            rounded="rounded-3xl"
            split="PPL"
            splitTextColor="text-[#fff]"
            heartBg="bg-[#242428]"
            heartOut="text-[#a0f000]"
            heartFill="#a0f000"
          />
          <CardRect
            color="bg-transparent"
            title="7 Jan"
            textColor="text-[#fff]"
            rounded="rounded-3xl"
            split="PPL"
            splitTextColor="text-[#fff]"
            heartBg="bg-[#242428]"
            heartOut="text-[#a0f000]"
            heartFill="#a0f000"
          />
          <CardRect
            color="bg-transparent"
            title="7 Jan"
            textColor="text-[#fff]"
            rounded="rounded-3xl"
            split="PPL"
            splitTextColor="text-[#fff]"
            heartBg="bg-[#242428]"
            heartOut="text-[#a0f000]"
            heartFill="#a0f000"
          />
          <CardRect
            color="bg-transparent"
            title="7 Jan"
            textColor="text-[#fff]"
            rounded="rounded-3xl"
            split="PPL"
            splitTextColor="text-[#fff]"
            heartBg="bg-[#242428]"
            heartOut="text-[#a0f000]"
            heartFill="#a0f000"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
