import { ChevronDown } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import GradientComp from "./gradientComp";
import { Title } from "./title";
import Files from "./files";

const Main = styled.div`
  height: 100vh;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Computer = styled.div`
  width: 100%;
  max-width: 1000px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  width: 56%;
  height: 296px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
`;

const Picture = styled(Image)`
  width: 80%;
  aspect-ratio: 1;
  top: 0;
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
const Coffee = styled(Image)`
  position: absolute;
  top: 50%;
  left: 0px;
  bottom: 48px;
`;

export default function Home() {
  return (
    <Main>
      <Coffee width={200} height={180} src={"/assets/tasse.png"} alt="tasse" />
      <Computer>
        <Text>
          <Title />
          <Files />
        </Text>
        <Picture
          width={700}
          height={400}
          src={"/assets/pc.png"}
          alt="Keyboard"
        />
      </Computer>
      <BottomLink href={"/#about"}>
        <ChevronDown strokeWidth={1} size={48} />
      </BottomLink>
    </Main>
  );
}
