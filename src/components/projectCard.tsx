import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  image: string;
  title: string;
  text: string;
  development: string;
  link: string;
  github: string;
  odd: boolean;
  technos: string[];
}

const rotateQuarter = keyframes`
   0%, 4% { transform: rotate(0deg); }
   4%, 15% { transform: rotate(-18deg); }
   15%, 17% { transform: rotate(99deg); }
   17% { transform: rotate(90deg); }
  100% { transform: rotate(90deg); }
`;

const Card = styled.div<{ $display?: boolean; $isBig?: boolean }>`
  width: 100%;
  max-width: 1000px;
  height: ${(props) => (props.$isBig ? "650px" : "250px")};
  margin: auto;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
  position: relative;
  margin-bottom: 4em;
  scroll-margin-top: 3.9em;
  @media (max-width: 1000px) {
    height: ${(props) => (props.$isBig ? "800px" : "")};
  }
  @media (max-width: 600px) {
    height: ${(props) => (props.$isBig ? "1000px" : "450px")};
  }
  @media (max-width: 450px) {
    height: ${(props) => (props.$isBig ? "1200px" : "")};
  }
`;

const ImageDiv = styled(Link)<{ $display?: boolean; $isBig?: boolean }>`
  position: absolute;
  z-index: 2;
  right: ${(props) => (props.$display ? "" : "0")};
  left: ${(props) => (props.$display ? "0" : "")};
  width: ${(props) => (props.$isBig ? "100%" : "30%")};
  height: ${(props) => (props.$isBig ? "32%" : "90%")};
  self-align: end;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
  &:hover {
    width: ${(props) => (props.$isBig ? "100%" : "30%")};
    height: ${(props) => (props.$isBig ? "32%" : "90%")};
    cursor: pointer;
    .linkInfo {
      right: ${(props) => (props.$display ? "" : "0px")};
      left: ${(props) => (props.$display ? "0px" : "")};
    }
    img {
      width: 120%;
      height: 120%;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 30%;
    &:hover {
      width: 100%;
      height: 35%;
      cursor: pointer;
    }
  }
`;

const Presentation = styled.div<{ $display?: boolean; $isBig?: boolean }>`
  position: relative;
  z-index: 1;
  width: ${(props) => (props.$isBig ? "100%" : "72%")};
  height: ${(props) => (props.$isBig ? "70%" : "100%")};
  top: ${(props) => (props.$isBig ? "30%" : "")};
  align-self: ${(props) => (props.$display ? "end" : "")};
  padding: 28px;
  border: 1px white solid;
  border-radius: 24px;
  display: flex;
  align-items: ${(props) => (props.$isBig ? "center" : "")};
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
    height: 70%;
    top: 29%;
    bottom: 0;
    padding: 1em;
  }
`;

const ProjectPic = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  object-fit: cover;
  object-position: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const Github = styled(Link)<{ $display?: boolean; $isBig?: boolean }>`
  width: 220px;
  height: 42px;
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
  @media (max-width: 600px) {
  }
`;

const ReadMore = styled.button<{ $isBig?: boolean; $display?: boolean }>`
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  width: 160px;
  height: 42px;
  background: transparent;
  color: white;
  border-radius: 12px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  @media (max-width: 600px) {
  }
  .plus {
    margin-left: 0.6em;
    animation: ${rotateQuarter} 6s ease-in-out infinite;
  }
  .minus {
    margin-left: 0.6em;
  }
`;

const NavCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1<{ $isBig?: boolean }>`
  align-self: center;
  font-size: 2.2em;
  font-family: ${(props) => props.theme.fonts.bold};
  margin: ${(props) => (props.$isBig ? "0.8em 0" : "0 0 0.5em 0")};
`;

const Text = styled.p`
  font-size: 1em;
`;
const Development = styled(Text)``;

const GithubIcon = styled(Image)`
  margin-left: 1em;
`;

const IntroTechno = styled.p`
  margin: 1em 0 0.8em 0;
`;

const TechnoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Technologie = styled.div`
  border: 1px solid white;
  border-radius: 12px;
  padding: 0.5em;
  margin: 0 0.5em 0.5em 0;
  background: linear-gradient(65deg, #1f2663 25%, #090a16 35%);
  background-size: 200% auto;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function ProjectCard({
  image,
  title,
  text,
  development,
  link,
  github,
  odd,
  technos,
}: Props) {
  const [isBig, setisBig] = useState(false);
  const router = useRouter();
  return (
    <Card $display={odd} $isBig={isBig} id={title}>
      <ImageDiv
        $isBig={isBig}
        $display={odd}
        href={link}
        target={title === "Portfolio" ? "" : `_blank`}
      >
        <ProjectPic src={image} alt={title} width={900} height={900} />
        <LinkInfo $display={odd} className="linkInfo">
          Visiter le site
        </LinkInfo>
      </ImageDiv>
      <Presentation $isBig={isBig} $display={odd}>
        <ContentSection>
          <Title $isBig={isBig}>{title}</Title>
          <Text>{text}</Text>
          {isBig && <Development>{development}</Development>}
        </ContentSection>
        {isBig && (
          <TechnoSection>
            <IntroTechno>Développé à l&apos;aide de :</IntroTechno>
            <Technologies>
              {technos.map((techno, id) => (
                <Technologie key={id}>{techno}</Technologie>
              ))}
            </Technologies>
          </TechnoSection>
        )}
        <NavCard>
          <Github href={github} $display={odd} $isBig={isBig}>
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
          <ReadMore
            $display={odd}
            $isBig={isBig}
            onClick={() => {
              !isBig ? router.push(`/#${title}`, { scroll: true }) : "";
              setisBig(!isBig);
            }}
          >
            {isBig ? "Réduire" : "En savoir"}
            {isBig ? (
              <Minus
                color="white"
                width={30}
                height={30}
                strokeWidth={3}
                className="minus"
              />
            ) : (
              <Plus
                color="white"
                className="plus"
                width={30}
                height={30}
                strokeWidth={3}
              />
            )}
          </ReadMore>
        </NavCard>
      </Presentation>
    </Card>
  );
}
