import { bannerImg } from "../assets";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative ">
      <img
        className="w-[250px] h-[300px] lgl:w-[400px] lgl:h-[500px] z-10 rounded-full"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute w-[350px] h-[300px] lgl:w-[400px] lgl:h-[520px] bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadow-shadowOne flex justify-center items-center rounded-full"></div>
    </FadeIn>
  );
};

export default RightBanner;
