import { projects } from "@/libs/datas/projects";
import ProjectCard from "./projectCard";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const projectAnim = {
  hidden: { opacity: 0, scale: 0.3, x: -500 },
  hiddenOdd: { opacity: 0, scale: 0.3, x: 500 },
  reveal: { opacity: 1, scale: 1, x: 0 },
};

const ProjectGrid = styled.div`
  width: 80%;
  margin: auto;
  min-height: 100vh;

  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
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
  const ref = useRef(null);
  const [projectsVisibility, setProjectsVisibility] = useState(false);
  const isInView = useInView(ref, {
    amount: "all",
  });
  useEffect(() => {
    isInView ? setProjectsVisibility(true) : "";
  }, [isInView]);
  return (
    <ProjectGrid>
      <Title ref={ref}>Découvrez mes projets</Title>
      {projects.map((project, key) => {
        return (
          <motion.div
            key={key}
            initial={key % 2 === 0 ? "hiddenOdd" : "hidden"}
            animate={projectsVisibility ? "reveal" : ""}
            transition={{
              duration: 1,
              delay: key * 0.4,
            }}
            variants={projectAnim}
          >
            <ProjectCard {...project} odd={key % 2 == 0} />
          </motion.div>
        );
      })}
    </ProjectGrid>
  );
}
