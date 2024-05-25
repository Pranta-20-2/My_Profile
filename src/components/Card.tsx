import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";

interface Props {
  title: string;
  des: string;
  icon: React.ReactNode;
}

const Card = ({ title, des, icon }: Props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleMouseLeave = () => {
    setShowFullDescription(false);
  };

  return (
    <div
      className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group"
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-72">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-[#f6cd65]">{icon}</span>
            ) : (
              <>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <div
              className={`base ${
                showFullDescription
                  ? "max-h-32 overflow-y-auto"
                  : "max-h-12 overflow-hidden"
              } transition-max-height duration-300 ease-in-out`}
            >
              {showFullDescription ? des : `${des.substring(0, 50)}...`}
            </div>
            <span
              className="flex items-center gap-4 text-2xl text-[#f6cd65] cursor-pointer"
              onClick={handleToggleDescription}
            >
              <HiArrowRight /> 
              <p className="text-base">Show Details</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
