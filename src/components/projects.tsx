import { projects } from "@/libs/datas/projects";
import ProjectCard from "./projectCard";
import styled from "styled-components";

const ProjectGrid = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function Projects() {
  return (
    <ProjectGrid>
      {projects.map((project, key) => {
        return <ProjectCard key={key} {...project} />;
      })}
    </ProjectGrid>
  );
}
