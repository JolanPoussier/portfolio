import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
  github: string;
}

const Card = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 250px;
  margin: auto;
  display: flex;
  position: relative;
  margin-bottom: 4em;
`;

const ImageDiv = styled.div`
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
    .button {
      left: -6px;
    }
  }
`;

const ProjectPic = styled(Image)`
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  object-fit: cover;
`;

const LinkButton = styled(Link)`
  position: absolute;
  z-index: 3;
  bottom: 12px;
  left: -200px;
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  backdrop-filter: blur(15px);
  background-color: rgba(182, 182, 182, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  border: none;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const Github = styled(Link)`
  position: absolute;
  z-index: 2;
  bottom: 12px;
  right: 12px;
  padding: 0.7em;
  background: black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: white;
    color: black;
  }
`;

const Presentation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 72%;
  height: 100%;
  padding: 2em;
  border: 1px white solid;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
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
}: Props) {
  return (
    <Card>
      <ImageDiv>
        <ProjectPic src={image} alt={title} width={200} height={200} />
        <LinkButton href={link} className="button" target="_blank">
          Visiter le site
        </LinkButton>
      </ImageDiv>
      <Presentation>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Presentation>
      <Github href={github}>
        Consulter le repo
        <GithubIcon
          src={"/assets/github.png"}
          alt="github logo"
          width={20}
          height={20}
        />
      </Github>
    </Card>
  );
}
