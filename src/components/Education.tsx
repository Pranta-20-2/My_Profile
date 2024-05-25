import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className="w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="American International University- Bangladesh"
            year= "2020 - 2024"
            result="3.83/4"
         
          />
          <ResumeCard
            title="Higher Secondary School Certificate"
            subTitle="Govt. City College Chattogram "
            year= "2017 - 2019"
            result="4.75/5"
           
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="St. Placide’s High School, Chattogram"
            year= "2017"
            result="5.00/5"
          />
        </div>
      </div>
      {/* part Two */}

      <div className="w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Feb 2024 - April 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="App & Web Developer Trainee"
            subTitle="Intern at Programee"
            result="Bangladesh"
            year="Here i am working as a App & Web developer trainee. I am working with the Programee Development team to build their website using ReactJS and NodeJS.
            I am successfully developing an advanced e-learning app, handling IJI design and blueprint scripting in Unreal Engine 5."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
