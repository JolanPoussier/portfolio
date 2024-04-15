import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Main = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Name = styled.h1`
  font-family: ${(props) => props.theme.fonts.extralight};
  font-size: 2em;
  margin-bottom: 1em;
`;
const Job = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 6em;
`;

const Picture = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4em;
  margin-left: 4em;
  border-radius: 20px;
  overflow: hidden;
`;

const BottomLink = styled(Link)`
  position: absolute;
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
      <Text>
        <Name>Jolan Poussier</Name>
        <Job>
          Web <br /> Developer
        </Job>
      </Text>
      <Picture>
        <Image
          width={408}
          height={306}
          src={'/assets/profilPic.png'}
          alt="Handsom young man with long hair, a very charismatic face and an enigmatic smile"
        />
      </Picture>
      <BottomLink href={'/#projects'}>
        <ChevronDown strokeWidth={1} size={48} />
      </BottomLink>
    </Main>
  );
}
