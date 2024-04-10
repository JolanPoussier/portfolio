'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';

const Container = styled.header`
  height: 50px;
  width: 500px;
  margin: auto;
  margin-top: 24px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(15px);
  background-color: rgba(182, 182, 182, 0.2);
  justify-content: space-evenly;
  border-radius: 24px;
  font-family: ${(props) => props.theme.fonts.light};
`;

const NavLink = styled(Link)<{ focus?: boolean }>`
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

export default function Navbar() {
  const pathname = usePathname();
  return (
    <Container>
      <NavLink focus={pathname == '/' ? true : false} href={'/'}>
        Home
      </NavLink>
      <NavLink
        focus={pathname == '/projects' ? true : false}
        href={'/projects'}
      >
        Projects
      </NavLink>
      <NavLink focus={pathname == '/about' ? true : false} href={'/about'}>
        About me
      </NavLink>
    </Container>
  );
}
