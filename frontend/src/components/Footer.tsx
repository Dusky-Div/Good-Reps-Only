import { Heart } from "lucide-react";
import { TfiLinkedin } from "react-icons/tfi";
import { PiGithubLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex h-fit px-6 py-8 mx-auto w-svw max-w-[420px] text-white bg-[#191919] rounded-t-3xl border-t-2 border-[#313131] justify-between items-center">
      <div className="flex flex-col gap-1">
        <div className="flex text-4xl font-medium">
          Good Reps <br />
          Only
        </div>
        <div className="flex gap-1 text-[#8F8F8F] font-regular items-center">
          Made with <Heart color="#BC1125" size="1.2rem" fill="#BC1125" /> by
          Divyansh
        </div>
      </div>
      <div className="flex h-fit w-fit gap-6 p-2 rounded-full bg-[#242424]">
        <a href="https://github.com/Dusky-Div">
          <div className="flex rounded-full w-12 h-12 bg-white items-center justify-center">
            <PiGithubLogoFill size="1.7em" color="#000" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/divyansh2505/">
          <div className="flex rounded-full w-12 h-12 bg-[#0b65c2] items-center justify-center">
            <TfiLinkedin size="1.4em" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
