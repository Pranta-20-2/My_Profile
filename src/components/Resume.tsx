import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [educationData, setEducationData] = useState<Boolean>(true);
  const [skillData, setSkillData] = useState<Boolean>(false);
  const [achievementData, setAchievementData] = useState<Boolean>(false);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="" des="My Resume" />
        </div>
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setAchievementData(false);
              }}
              className={`${skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
                } resumeLi`}
            >
              Professional Skills
            </li>
            <li
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setAchievementData(false);
              }}
              className={`${educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
                } resumeLi`}
            >
              Education & Experience
            </li>

            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setAchievementData(true);
              }}
              className={`${achievementData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
                } resumeLi`}
            >
              Achievements & Courses
            </li>
          </ul>
        </div>
        {skillData && <Skills />}
        {educationData && <Education />}
        {achievementData && <Achievement />}
      </FadeIn>
    </section>
  );
};

export default Resume;
