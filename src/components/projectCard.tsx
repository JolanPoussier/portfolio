import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
  github: string;
  odd: boolean;
}

const Card = styled.div<{ $display?: boolean }>`
  width: 100%;
  max-width: 1000px;
  height: 250px;
  margin: auto;
  display: flex;
  justify-content: ${(props) => (props.$display ? `flex-end` : "")};
  position: relative;
  margin-bottom: 4em;
  @media (max-width: 600px) {
    height: 500px;
  }
`;

const ImageDiv = styled(Link)<{ $display?: boolean }>`
  position: relative;
  width: 30%;
  height: 90%;
  self-align: end;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
  &:hover {
    width: 32%;
    height: 95%;
    cursor: pointer;
    .button {
      right: ${(props) => (props.$display ? "" : "0px")};
      left: ${(props) => (props.$display ? "0px" : "")};
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 50%;
    &:hover {
      width: 100%;
      height: 55%;
      cursor: pointer;
    }
  }
`;

const ProjectPic = styled(Image)`
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  object-fit: cover;
`;

const LinkInfo = styled.div<{ $display?: boolean }>`
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: ${(props) => (props.$display ? "-100%" : "")};
  right: ${(props) => (props.$display ? "" : "-100%")};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.85);
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  border: none;
  font-size: 1em;
  cursor: pointer;
  color: white;
  @media (max-width: 600px) {
    left: 0;
    right: 0;
    background: rgb(0, 0, 0, 0.65);
    font-size: 1.2em;
    font-family: ${(props) => props.theme.fonts.bold};
  }
`;

const Github = styled(Link)<{ $display?: boolean }>`
  position: absolute;
  z-index: 1;
  bottom: 24px;
  right: ${(props) => (props.$display ? "" : "24px")};
  left: ${(props) => (props.$display ? "24px" : "")};
  padding: 0.7em;
  background: white;
  color: black;
  border-radius: 12px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  .second {
    display: none;
  }
  &:hover {
    background: black;
    color: white;
    .first {
      display: none;
    }
    .second {
      display: block;
    }
  }
`;

const Presentation = styled.div<{ $display?: boolean }>`
  position: absolute;
  top: ${(props) => (props.$display ? "" : "0")};
  right: ${(props) => (props.$display ? "" : "0")};
  bottom: ${(props) => (props.$display ? "0" : "")};
  left: ${(props) => (props.$display ? "0" : "")};
  z-index: -1;
  width: 72%;
  height: 100%;
  padding: 2em;
  border: 1px white solid;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
    height: 52%;
    top: auto;
    bottom: 0;
    padding: 1em;
  }
`;

const Title = styled.h1`
  font-size: 2.2em;
  font-family: ${(props) => props.theme.fonts.bold};
  margin-bottom: 0.5em;
`;

const Text = styled.p`
  font-size: 1em;
`;

const GithubIcon = styled(Image)`
  margin-left: 1em;
`;

export default function ProjectCard({
  image,
  title,
  text,
  link,
  github,
  odd,
}: Props) {
  return (
    <Card $display={odd}>
      <ImageDiv $display={odd} href={link} target="_blank">
        <ProjectPic src={image} alt={title} width={200} height={200} />
        <LinkInfo $display={odd} className="button">
          Visiter le site
        </LinkInfo>
      </ImageDiv>
      <Presentation $display={odd}>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Presentation>
      <Github href={github} $display={odd}>
        Consulter le repo
        <GithubIcon
          src={"/assets/github.png"}
          alt="github logo"
          className="second"
          width={20}
          height={20}
        />
        <GithubIcon
          src={"/assets/github2.png"}
          alt="github logo2"
          className="first"
          width={20}
          height={20}
        />
      </Github>
    </Card>
  );
}
