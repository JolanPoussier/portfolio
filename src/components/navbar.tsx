"use client";

import style from "./responsive.module.scss";
import { Github, Linkedin, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css, keyframes } from "styled-components";

const rotateButton = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(0.375turn);
    }
`;
const rotateBackButton = keyframes`
    from {
        transform: rotate(0.375turn);
    }
    to {
        transform: rotate(0);
    }
`;

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

const ContainerMobile = styled(Container)<{ modal: Boolean }>`
  left: auto;
  right: ${(props) => (props.modal ? `24px` : `-200px`)};
  top: 84px;
  flex-direction: column;
  width: 200px;
  height: 250px;
  transition: all 0.5s ease-in-out;
`;

const animation = () => css`
  ${rotateButton} 0.5s ease-in-out alternate forwards;
`;
const animationBack = () => css`
  ${rotateBackButton} 0.5s ease-in-out alternate forwards;
`;
const NavbarButton = styled.button<{ modal: Boolean }>`
  position: fixed;
  z-index: 6;
  top: 24px;
  right: 24px;
  padding: 12px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(15px);
  background-color: rgba(182, 182, 182, 0.2);
  border-radius: 30px;
  border: none;
  color: white;

  ${({ modal }) =>
    modal
      ? css`
          animation: ${animation};
        `
      : css`
          animation: ${animationBack} 0.5s ease-in-out alternate forwards;
        `}
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
  // const isLaptopOrTablet = useMediaQuery({
  //   query: "(min-width: 900px)",
  // });
  const [modalOpen, setModalOpen] = useState<Boolean>(false);
  return (
    <>
      <Logo>
        <Image
          src={"/assets/logo.png"}
          alt="Logo with inital JP"
          width={100}
          height={100}
          priority
        />
      </Logo>
      <div className={style.desktopNavbar}>
        <Container>
          <NavbarContent location={location} />
        </Container>
        <ContactSection>
          <ContactLink
            target="_blank"
            href={"https://github.com/JolanPoussier"}
          >
            <Github strokeWidth={1.2} />
          </ContactLink>
          <ContactLink
            target="_blank"
            href={"https://www.linkedin.com/in/jolan-poussier/"}
          >
            <Linkedin strokeWidth={1.2} />
          </ContactLink>
        </ContactSection>
      </div>
      <div className={style.mobileNavbar}>
        <NavbarButton
          modal={modalOpen}
          onClick={() => setModalOpen(!modalOpen)}
        >
          <Plus />
        </NavbarButton>

        <ContainerMobile modal={modalOpen}>
          <NavbarContent location={location} setModalOpen={setModalOpen} />
        </ContainerMobile>
      </div>
    </>
  );
}

function NavbarContent({
  location,
  setModalOpen,
}: {
  location: string;
  setModalOpen?: (isOpen: Boolean) => void;
}) {
  return (
    <>
      <NavLink
        focus={location == "" || location == "home" ? "true" : ""}
        href={"/#home"}
        scroll={true}
        onClick={() => setModalOpen?.(false)}
      >
        Accueil
      </NavLink>
      <NavLink
        focus={location == "about" ? "true" : ""}
        href={"/#about"}
        scroll={true}
        onClick={() => setModalOpen?.(false)}
      >
        À propos
      </NavLink>
      <NavLink
        focus={location == "projects" ? "true" : ""}
        href={"/#projects"}
        scroll={true}
        onClick={() => setModalOpen?.(false)}
      >
        Projets
      </NavLink>
      <NavLink
        focus={location == "contact" ? "true" : ""}
        href={"/#contact"}
        scroll={true}
        onClick={() => setModalOpen?.(false)}
      >
        Contact
      </NavLink>
    </>
  );
}
