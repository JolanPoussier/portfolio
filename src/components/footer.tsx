import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

const Main = styled.footer`
  width: 95%;
  margin: auto;
  height: 100px;
  border-top: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
const ContactSection = styled.div`
  //   margin: auto;
`;

const ContactLink = styled(Link)`
  margin-left: 24px;
  color: grey;
  &:hover {
    transition: all 0.2s linear;
    color: white;
  }
`;
export default function Footer() {
  return (
    <Main>
      <span>Jolan POUSSIER © | Tous droits réservés</span>
      <ContactSection>
        <ContactLink target="_blank" href={"https://github.com/JolanPoussier"}>
          <Github strokeWidth={1.2} />
        </ContactLink>
        <ContactLink
          target="_blank"
          href={"https://www.linkedin.com/in/jolan-poussier/"}
        >
          <Linkedin strokeWidth={1.2} />
        </ContactLink>
      </ContactSection>
    </Main>
  );
}
