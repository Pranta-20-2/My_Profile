import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiMongodb, SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FadeIn } from "./FadeIn";
import Tilt from 'react-parallax-tilt';
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Full Stack Developer.", "MERN Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 3000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-5 text-center">
        <h4 className=" text-lg font-normal ">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white ">
          HELLO,  <br /> I'm <span className="text-[#f6cd65] capitalize">Pranta Das</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          A <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>

      </div>
      <Tilt >
        <div className="background-stripes tilt-scale">
          <div className="form">
            <p className="text-base font-bodyFont leading-6 tracking-wider shadow-2xl text-justify">
              Greetings! I'm Pranta Das, a frontend-focused MERN junior developer, passionate about technology and eager to make an impact. With a strong foundation in the MERN stack and various programming languages, I thrive on challenges and enjoy crafting dynamic, user-friendly web applications.I stay updated with industry trends and am committed to continuous learning. My problem-solving skills and creative approach help me develop innovative solutions. As a team player, I value collaboration and effective communication.When I'm not coding, When I'm not coding, you'll find me watching movies or playing football, cricket, and basketball. I'm excited to bring my skills and enthusiasm to the IT industry. Thank you for exploring my portfolio – your interest is sincerely appreciated.
            </p>
          </div>
        </div>
      </Tilt>

      <div className="flex flex-col gap-10 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiPostgresql />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>

          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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

export default LeftBanner;
