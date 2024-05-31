import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const Container = styled.header`
  position: fixed;
  z-index: 6;
  top: 24px;
  left: calc((100vw / 2) - 325px);
  min-height: 50px;
  width: 650px;
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

const ContactSection = styled.div`
  position: absolute;
  top: 35px;
  right: 24px;
  z-index: 50;
`;

const ContactLink = styled(Link)`
  margin-left: 24px;
  color: grey;
  z-index: 5;
  &:hover {
    transition: all 0.2s linear;
    color: white;
  }
`;

const NavLink = styled(Link)<{ focus?: string }>`
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.focus ? "white" : "grey")};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
  }
`;

export default function Navbar({ location }: { location: string }) {
  return (
    <>
      <Logo>
        <Image
          src={"/assets/logo.png"}
          alt="Logo with inital JP"
          width={90}
          height={90}
        />
      </Logo>
      <Container>
        <NavLink
          focus={location == "" || location == "home" ? "true" : ""}
          href={"/#home"}
          scroll={true}
        >
          Accueil
        </NavLink>
        <NavLink
          focus={location == "about" ? "true" : ""}
          href={"/#about"}
          scroll={true}
        >
          À propos
        </NavLink>
        <NavLink
          focus={location == "projects" ? "true" : ""}
          href={"/#projects"}
          scroll={true}
        >
          Projets
        </NavLink>
        <NavLink
          focus={location == "contact" ? "true" : ""}
          href={"/#contact"}
          scroll={true}
        >
          Contact
        </NavLink>
      </Container>
      <ContactSection>
        <ContactLink target="_blank" href={"https://github.com/JolanPoussier"}>
          <Github strokeWidth={1.2} />
        </ContactLink>
        <ContactLink
          target="_blank"
          href={"https://www.linkedin.com/in/jolan-poussier/"}
        >
          <Linkedin strokeWidth={1.2} />
        </ContactLink>
      </ContactSection>
    </>
  );
}
