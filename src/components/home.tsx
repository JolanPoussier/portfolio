import { ChevronDown } from "lucide-react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import BordersHome from "./bordersHome";
import Image from "next/image";
import GradientComp from "./gradientComp";

const Main = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterDiv = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 5em;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
`;
const colorAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const Name = styled.h1`
  font-family: ${(props) => props.theme.fonts.extralight};
  font-size: 3em;
  line-height: 1em;
`;

const Job = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 6em;
  background: linear-gradient(to right, white, white, #69c2fa, #a37eed);
  background-size: 800% 100%;
  animation: ${colorAnimation} 10s ease infinite;
  -webkit-background-clip: text;
  color: transparent;
`;

const PictureContainer = styled.div`
  width: 250px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 4em;
  border-radius: 300px;
  overflow: hidden;
`;

const Picture = styled(Image)`
  width: auto;
  height: auto;
`;
const SVG = styled(Picture)`
  border: 5px solid white;
  &:hover {
    border: 10px solid white;
  }
  transition: all 0.2s ease-in-out;
`;

const BottomLink = styled(Link)`
  position: absolute;
  margin: auto;
  bottom: 48px;
  color: grey;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
  }
`;

export default function Home() {
  return (
    <Main>
      <CenterDiv>
        <BordersHome />
        <Text>
          <Name>
            Hi <br /> I&apos;m Jolan,
          </Name>
          <GradientComp />
          {/* <SVG
            src={"/assets/A Web Developer.svg"}
            alt="Web Developer"
            height={4000}
            width={3300}
          /> */}
          {/* <Job>
            A Web <br /> Developer
          </Job> */}
        </Text>
        <PictureContainer>
          <Picture
            width={330}
            height={400}
            src={"/assets/picHome.jpg"}
            alt="Handsom young man with long hair, a very charismatic face and an enigmatic smile"
          />
        </PictureContainer>
      </CenterDiv>
      <BottomLink href={"/#projects"}>
        <ChevronDown strokeWidth={1} size={48} />
      </BottomLink>
    </Main>
  );
}
