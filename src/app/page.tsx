"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import { useIsVisible } from "@/hooks/useOnScreen";
import { findNavbarLocation } from "@/utils/findNavbarLocation";
import { useRef } from "react";
import styled from "styled-components";

const Main = styled.main`
  padding: 0 2em;
  font-size: 1.1rem;
  line-height: 1.3em;
  letter-spacing: 0.2px;
`;

const Section = styled.div`
  display: block;
  min-height: 100vh;
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
  const contact = useRef(null);
  const homeVisible = useIsVisible(home);
  const projectsVisible = useIsVisible(projects);
  const aboutVisible = useIsVisible(about);
  const contactVisible = useIsVisible(contact);

  return (
    <>
      <Navbar
        location={findNavbarLocation(
          homeVisible,
          projectsVisible,
          aboutVisible,
          contactVisible
        )}
      />
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
        <Section ref={contact} id="contact">
          <Contact />
        </Section>
      </Main>
    </>
  );
}
