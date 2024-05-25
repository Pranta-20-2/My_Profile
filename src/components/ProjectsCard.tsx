import { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  easing: 'ease',
  once: true,
  mirror: false,
});

const ProjectsCard = ({ project }) => {
  const [hover, setHover] = useState(false);
  const { img, title, des, technologies, ClientLink, ServerLink, LiveLink } = project;

  return (
    <Tilt tiltEnable={false} glareEnable={true} glareMaxOpacity={0.3} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
      <div className="w-full p-4 xl:p-4 h-full rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 gap-4 flex flex-col relative" data-aos="zoom-in">
        <div className="w-full overflow-hidden rounded-lg">

          <img
            className="w-full h-[250px] object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={img}
            alt={title}
          />
        </div>

        <div className="w-full mt-5 flex flex-col gap-6">
          <div>
            <div className=" flex items-center justify-between">
              <h3 className="text-xl uppercase text-[#f6cd65] font-normal cursor-pointer">
                {title}
              </h3>
            </div>
            <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              {des}
            </p>
            <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              Technology: {technologies}
            </p>

            <button className="btn mt-5 flex mx-auto hover:text-designColor duration-300 cursor-pointer">
              <a href={LiveLink} target="_blank">See the demo</a>
            </button>

            <div className="absolute top-8 right-5 text-lg h-10 rounded-full   text-gray-400 inline-flex cursor-pointer "
              onMouseEnter={() => setHover(true)}
              onClick={() => setHover(false)}

            >
              <span className=' bg-black w-10 h-10 rounded-full  inline-flex justify-center items-center' >
                <BsGithub />
              </span>
              {hover && (
                <div className="absolute mt-10 w-full text-white rounded-md ">
                  <div className='gap-5 w-full space-y-2'>
                    {ClientLink == null ? <></> : (
                      <button className=" btn text-designColor duration-300 cursor-pointer">
                        <a href={ClientLink} target="_blank">Client Link</a>
                      </button>
                    )}
                    {ServerLink == null ? <></> : (
                      <button className="btn  text-designColor duration-300 cursor-pointer">
                        <a href={ServerLink} target="_blank">Server Link</a>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectsCard;
