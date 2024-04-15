import styled from 'styled-components';

const Main = styled.div`
  height: 100%;
  display: flex;
  alignt-itms: center;
  justify-content: center;
  flex-direction: column;
`;
const Intro = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 4em;
`;

const Job = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 6em;
`;

export default function Home() {
  return (
    <Main>
      <Intro>Jolan Poussier</Intro>
      <Job>Web Developper</Job>
    </Main>
  );
}
