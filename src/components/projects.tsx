import { projects } from "@/libs/datas/projects";
import ProjectCard from "./projectCard";
import styled from "styled-components";

const ProjectGrid = styled.div`
  width: 80%;
  margin: auto;
  height: 100vh;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  text-align: center;
  font-size: 3em;
  margin: auto;
  margin-top: 3em;
  margin-bottom: 2em;
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
