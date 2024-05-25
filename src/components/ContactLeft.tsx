import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Pranta Das</h3>
        <p className="text-lg font-normal text-gray-400">
          Frontend Developer || MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm a frontend-focused MERN junior developer, passionate about technology and eager to make an impact with a strong foundation in the MERN stack. I thrive on challenges and enjoy crafting dynamic, user-friendly web applications. Committed to continuous learning and staying updated with industry trends, I bring innovative solutions through my problem-solving skills and creative approach. As a team player, I value collaboration and effective communication and am excited to contribute my skills to the IT industry.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+880 1863-618432</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">daspranta7@gmail.com</span>
        </p>
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
  );
};

export default ContactLeft;
