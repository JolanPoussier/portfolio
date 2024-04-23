import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
}

const Card = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 30%;
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

const Presentation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 72%;
  height: 100%;
  border: 1px white solid;
  border-radius: 24px;
`;

export default function ProjectCard({ image, title, text, link }: Props) {
  return (
    <Card>
      <ImageDiv>
        <ProjectPic src={image} alt={title} width={200} height={200} />
        <LinkButton href={link} className="button" target="_blank">
          Visit website
        </LinkButton>
      </ImageDiv>
      <Presentation></Presentation>
    </Card>
  );
}
