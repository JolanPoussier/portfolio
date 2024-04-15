'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  top: 24px;
  left: calc((100vw / 2) - 250px);
  min-height: 50px;
  width: 500px;
  margin: auto;
  padding: 0 12px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(15px);
  background-color: rgba(182, 182, 182, 0.2);
  justify-content: space-evenly;
  border-radius: 30px;
  font-family: ${(props) => props.theme.fonts.light};
  font-size: 18px;
`;

const NavLink = styled(Link)<{ focus?: string }>`
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.focus ? 'white' : 'grey')};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
  }
`;

export default function Navbar({ location }: { location: string }) {
  return (
    <Container>
      <NavLink
        focus={location == '' || location == 'home' ? 'true' : ''}
        href={'/#home'}
        scroll={true}
      >
        Home
      </NavLink>
      <NavLink
        focus={location == 'projects' ? 'true' : ''}
        href={'/#projects'}
        scroll={true}
      >
        Projects
      </NavLink>
      <NavLink
        focus={location == 'about' ? 'true' : ''}
        href={'/#about'}
        scroll={true}
      >
        About me
      </NavLink>
    </Container>
  );
}
