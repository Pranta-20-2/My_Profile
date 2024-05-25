import { AiFillAppstore } from "react-icons/ai";
import { SiAntdesign, SiBmcsoftware } from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { TbBrandWebflow } from "react-icons/tb";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Web Development"
            des="During my time at university, I took an advanced web technology course that sparked my passion for development and solidified my decision to pursue a career in this field. During my internship, I worked as a frontend developer trainee with the development team on the Programme website. To gain even more knowledge, I enrolled in Programming Hero, where I developed a strong foundation in web development."
            icon={<TbBrandWebflow />}
          />

          <Card
            title="App Development"
            des="During my internship, I am working as an App Developer Trainee on the Unreal Engine platform. I design the HTML and CSS parts of the Programme E-learning app. We work collaboratively as a team to achieve our goals. Our developer mainly trains us, and we work according to his training."
            icon={<AiFillAppstore />}
          />
          <Card
            title="Data Science"
            des="I completed a data science course at Ostad, where I learned many aspects of data science. I include all my accomplishments and learnings from this course in my resume."
            icon={<CiDatabase />}
          />
          <Card
            title="Design"
            des="Previously, I worked on motion graphics tasks, which gave me some knowledge about designing. In my web development course at Programming Hero, we were given client requirements and designed our websites independently. Through this experience, I gained knowledge about Figma design."
            icon={<SiAntdesign />}
          />
          <Card
            title="Software Testing"
            des="At university, I completed a software quality testing course where I learned about manual testing, white box testing, and the Software Testing Life Cycle (STLC) method. After that, I expanded my knowledge through self-study, focusing on unit testing, Api testing and integration testing."
            icon={<SiBmcsoftware />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
