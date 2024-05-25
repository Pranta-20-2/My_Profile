import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { logo } from "../assets";
import { FadeIn } from "./FadeIn";

const Footer = () => {
  return (
    <FadeIn className="w-full py-10 h-auto border-b-[1px] border-b-black">
      <div className="w-full h-full flex flex-col items-center gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div>
          <div className="flex gap-4">
            <a href="https://github.com/Pranta-20-2" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/daspranta20/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/prantadas07" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Footer;
