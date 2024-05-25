import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { FadeIn } from "./FadeIn";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, []);
  console.log(projects);
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title=""
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-14">
          {
            projects.map((project, id) => <ProjectsCard key={id} project={project}></ProjectsCard>)
          }
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
