import { projects } from "@/libs/datas/projects";
import ProjectCard from "./projectCard";
import styled from "styled-components";

const ProjectGrid = styled.div`
  width: 80%;
  margin: auto;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  text-align: center;
  font-size: 3em;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: normal;
  background: linear-gradient(to right, #87a9ed, #b6faf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Projects() {
  return (
    <ProjectGrid>
      <Title>Projets</Title>
      {projects.map((project, key) => {
        return <ProjectCard key={key} {...project} odd={key % 2 == 0} />;
      })}
    </ProjectGrid>
  );
}
