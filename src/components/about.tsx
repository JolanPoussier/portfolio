/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { SkillsList } from "@/libs/datas/about";

const BackgroundMotion = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
`;

const Main = styled.section`
  width: 80%;
  max-width: 1150px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1em;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  max-width: 1200px;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 1em;
  text-align: center;
  font-size: 3em;
  line-height: normal;
  background: linear-gradient(to right, #87a9ed, #b6faf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsTitle = styled.h2`
  align-self: center;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 2em;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const Skills = styled.div`
  display: flex;
  align-self: center;
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Picture = styled.div`
  width: 26vw;
  height: 26vw;
  max-width: 350px;
  max-height: 350px;
  margin-right: 2em;
  @media (max-width: 900px) {
    align-self: center;
    margin-bottom: 1em;
    width: 60vw;
    height: 60vw;
    max-width: 300px;
    max-height: 300px;
    margin-right: 0;
  }
  @media (max-width: 500px) {
    width: 90vw;
    height: 90vw;
  }
`;

const Me = styled(Image)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 12px;
  overflow: hidden;
`;

const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 12px;
  padding: 1em;
  box-shadow: 0 0 3px white;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Skill = styled.div`
  border: 1px solid white;
  border-radius: 12px;
  padding: 0.5em;
  margin: 0 0.5em 0.5em 0;
  background: linear-gradient(65deg, #1f2663 25%, #090a16 35%);
  background-size: 450% auto;

  animation: ${BackgroundMotion} 5s ease-in-out infinite alternate;
`;

const CV = styled(Link)`
  display: inline-block;
  margin: auto;
  margin-top: 2em;
  align-self: center;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1em;
  color: black;
  padding: 0.7em;
  border-radius: 1000px;
  border: 1px solid white;
  background: white;
  &:hover {
    color: white;
    background: none;
    cursor: pointer;
    transition: all 0.2s linear;
  }
`;

const SkillSections = styled.div`
  display: flex;
  flex-raw: raw;
  justify-content: center;
  margin-bottom: 1em;
`;
const SkillSection = styled.div`
  border: 1px solid white;
  border-radius: 12px;
  padding: 0.5em;
  margin-right: 0.5em;
`;

export default function About() {
  return (
    <Main>
      <Title>A Propos de moi</Title>
      <Container>
        <Picture>
          <Me src={"/assets/photoSwag.png"} alt="me" width={500} height={500} />
        </Picture>
        <Content>
          Je m'appelle Jolan Poussier, et je suis passionné par le domaine du
          web. Motivé à améliorer continuellement mes compétences, j'ai
          récemment obtenu un titre professionnel de niveau bac+2 en
          développement web et web mobile après une reconversion
          professionnelle. Depuis, je poursuis ma formation en autodidacte, en
          me concentrant notamment sur Next.js, avec lequel j'ai développé
          plusieurs projets personnels que vous pouvez découvrir plus bas.
          <br />
          <br />
          Mon objectif est de devenir développeur fullstack. Je suis donc ouvert
          à diverses opportunités dans le domaine du développement et
          enthousiaste à l'idée d'apprendre de nouveaux langages. En plus de mes
          compétences techniques, j'ai trois ans d'expérience dans le commerce,
          ce qui m'a permis de développer une excellente capacité à travailler
          en équipe et à communiquer efficacement, tant en français qu'en
          anglais.
        </Content>
      </Container>
      <SkillsTitle>Compétences</SkillsTitle>
      <SkillSections>
        <SkillSection>Front</SkillSection>
        <SkillSection>Back</SkillSection>
        <SkillSection>OPS</SkillSection>
      </SkillSections>
      <Skills>
        {SkillsList.map((skill, id) => (
          <Skill key={id}>{skill.name}</Skill>
        ))}
      </Skills>
      <CV
        href="/CVJolanPoussier.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Télécharger mon CV
      </CV>
    </Main>
  );
}
