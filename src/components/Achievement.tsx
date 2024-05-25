import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Varsity Achievement</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Deans Award"
            subTitle="At my university, I have received the Dean's Lead Award five times based on my semester results."
            result="Success"
            
          />
          <ResumeCard
            title="Club Achievement"
            subTitle="As the Assistant General Secretary of the Public Relations team of the AIUB Computer Club, I develop communication skills, leadership skills, and handle pressure. With the help of the club, I organize numerous events such as AIUB CS Fest, Cyber Gaming Fest, and Jarvis, which are flagship events of our club."
            result="Success"
            des=""
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Courses</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Science Course"
            subTitle="I successfully completed the Ostad Data Science course, including all relevant details and the certificate link, which are provided in my CV."
            result="Success"
            des=""
          />
          <ResumeCard
            title="Web Development Course"
            subTitle="I have been passionate about development since my university days, which led me to complete the Web Development course at Programming Hero. This course provided me with strong knowledge of MERN development and significantly enhanced my skills."
            result="Success"
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
