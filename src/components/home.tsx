import style from "./responsive.module.scss";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Title } from "./title";
import Files from "./files";
import Smoke from "./smoke";

const Main = styled.div`
  height: 100vh;
  width: 95%;
  max-width: 1300px;
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
  text-align: center;
  @media (max-width: 900px) {
    width: 95%;
    height: 396px;
  }
`;

const Picture = styled(Image)`
  width: 80%;
  aspect-ratio: 1;
  top: 0;
  @media (max-width: 1200px) {
    & {
      width: 100%;
    }
  }
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
`;

const Mouse = styled(Coffee)`
  top: 58%;
  right: 20px;
  left: auto;
`;

export default function Home() {
  return (
    <Main>
      <div className={style.desktopHome}>
        <Coffee
          width={200}
          height={180}
          src={"/assets/tasse.png"}
          alt="tasse"
        />
        <Smoke />
        <Mouse width={200} height={110} src={"/assets/mouse.png"} alt="mouse" />
      </div>
      <Computer>
        <Text>
          <Title />
          <Files />
        </Text>
        <Picture
          className={style.desktopHomeComputer}
          width={700}
          height={400}
          src="/assets/mediacomputer.png"
          alt="Computer"
        />
        <Picture
          className={style.mobileHomeComputer}
          width={700}
          height={400}
          src="/assets/pc.png"
          alt="Computer"
        />
      </Computer>
      <BottomLink href={"/#about"}>
        <ChevronDown strokeWidth={1} size={48} />
      </BottomLink>
    </Main>
  );
}
