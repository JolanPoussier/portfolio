import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const SkillsList = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Javascript",
  "CSS",
  "Sass",
  "Tailwind",
  "StyledComponents",
  "PHP",
  "GIT",
  "Rest API",
  "SQL",
];

const Main = styled.section`
  width: 80%;
  margin: auto;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 3em;
  width: 1200px;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const SkillsTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 2em;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const Skills = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Picture = styled.div`
  width: 25vw;
  height: 25vw;
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
`;

const Skill = styled.div`
  border: 1px solid white;
  border-radius: 12px;
  padding: 0.5em;
  margin: 0 0.5em 0.5em 0;
`;

const CV = styled(Link)`
  margin-top: 2em;
  align-self: center;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 1.2em;
  color: white;
  padding: 0.5em;
  border-radius: 6px;
  border: 1px solid white;
  background: none;
  &:hover {
    color: black;
    background: white;
    cursor: pointer;
    transition: all 0.2s linear;
  }
`;

export default function About() {
  return (
    <Main>
      <Title>A Propos de moi</Title>
      <Container>
        <Picture>
          <Me src={"/assets/picHome.jpg"} alt="me" width={500} height={500} />
        </Picture>
        <Content>
          Je m&apos;appelle Jolan Poussier. Passionné par le domaine du web,
          j&apos;ai obtenu un titre pro bac+2 en développement web et web mobile
          après une reconversion professionnelle. Je continue ma formation en
          autodidacte en étudiant Next.JS avec lequel j&apos;ai développé
          plusieurs projets personnels.
          <br />
          Je suis actuellement à la recherche d&apos;une alternance pour
          compléter ma formation et obtenir un bachelor.
          <SkillsTitle>Compétences</SkillsTitle>
          <Skills>
            {SkillsList.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </Skills>
          <CV
            href="/CVJolanPoussier.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Télécharge mon CV
          </CV>
        </Content>
      </Container>
    </Main>
  );
}
