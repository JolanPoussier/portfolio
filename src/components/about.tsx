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
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 3em;
  max-width: 1200px;
  margin: auto;
  margin-top: 3em;
  margin-bottom: 2em;
  text-align: center;
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
  border: 1px solid white;
  border-radius: 12px;
  padding: 1em;
  box-shadow: 0 0 3px white;
`;

const Skill = styled.div`
  border: 1px solid white;
  border-radius: 12px;
  padding: 0.5em;
  margin: 0 0.5em 0.5em 0;
`;

const CV = styled(Link)`
  display: inline-block;
  margin: auto;
  margin-top: 2em;
  align-self: center;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1.2em;
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

export default function About() {
  return (
    <Main>
      <Title>A Propos de moi</Title>
      <Container>
        <Picture>
          <Me src={"/assets/picHome.jpg"} alt="me" width={500} height={500} />
        </Picture>
        <Content>
          Je m&apos;appelle Jolan Poussier. Passionné par le domaine du web et
          motivé pour gagner en compétence, j&apos;ai obtenu un titre pro bac+2
          en développement web et web mobile après une reconversion
          professionnelle. Je continue ma formation en autodidacte en étudiant
          entre autre Next.JS avec lequel j&apos;ai développé plusieurs projets
          personnels que vous pouvez découvrir plus bas.
          <br />
          <br />
          Ayant pour vocation de devenir développeur fullstack, je suis ouvert
          aux différentes opportunités dans le domaine du développement et à
          l&apos;apprentissage de nouveaux langages. Fort d&apos;une expérience
          de trois ans dans le commerce en amont, je suis également très à
          l&apos;aise pour travailler en équipe et communiquer, en français
          comme en anglais.
          <br />
          <br />
          Je suis actuellement à la recherche d&apos;une alternance pour
          compléter ma formation et obtenir un bachelor.
          <SkillsTitle>Compétences</SkillsTitle>
          <Skills>
            {SkillsList.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </Skills>
        </Content>
      </Container>
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
