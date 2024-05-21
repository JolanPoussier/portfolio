"use client";

import About from "@/components/about";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import { useIsVisible } from "@/hooks/useOnScreen";
import { findNavbarLocation } from "@/utils/findNavbarLocation";
import { useRef } from "react";
import styled from "styled-components";

const Main = styled.main`
  padding: 0 2em;
`;

const Section = styled.div`
  display: block;
  height: 100vh;
  font-family: ${(props) => props.theme.fonts.light};
  font-weight: 200;
  font-size: 1em;
  padding: 0.25em 1em;
  margin-top: 1em;
  &#home {
    margin-top: 0;
  }
`;

export default function App() {
  const home = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);
  const homeVisible = useIsVisible(home);
  const projectsVisible = useIsVisible(projects);

  return (
    <>
      <Navbar location={findNavbarLocation(homeVisible, projectsVisible)} />
      <Main>
        <Section ref={home} id="home">
          <Home />
        </Section>
        <Section ref={about} id="about">
          <About />
        </Section>
        <Section ref={projects} id="projects">
          <Projects />
        </Section>
      </Main>
    </>
  );
}
