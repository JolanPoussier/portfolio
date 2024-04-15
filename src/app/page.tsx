'use client';

import Home from '@/components/home';
import Navbar from '@/components/navbar';
import { useIsVisible } from '@/hooks/useOnScreen';
import { findNavbarLocation } from '@/utils/findNavbarLocation';
import { useRef } from 'react';
import styled from 'styled-components';

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
`;

const Button = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  display: block;
  height: 100vh;
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};
  font-family: ${(props) => props.theme.fonts.light};
  font-weight: 200;
  font-size: 1em;
  margin: 6em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
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
        <Button ref={projects} id="projects"></Button>
        <Button ref={about} id="about"></Button>
      </Main>
    </>
  );
}
