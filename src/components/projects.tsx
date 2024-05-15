import { projects } from "@/libs/datas/projects";
import ProjectCard from "./projectCard";
import styled from "styled-components";

const ProjectGrid = styled.div`
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 4em;
  width: 1000px;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export default function Projects() {
  return (
    <ProjectGrid>
      <Title>Projets</Title>
      {projects.map((project, key) => {
        return <ProjectCard key={key} {...project} />;
      })}
    </ProjectGrid>
  );
}
