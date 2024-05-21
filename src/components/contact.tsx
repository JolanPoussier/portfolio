"use client";

import { useState } from "react";
import styled from "styled-components";

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

const Container = styled.form``;

const Champ = styled.div``;
const Label = styled.label``;
const Input = styled.input``;
const Textarea = styled.textarea``;
const Button = styled.button``;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Main>
      <Title>Contact</Title>
      <Container onSubmit={handleSubmit}>
        <Champ>
          <Label htmlFor="name">Nom :</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Champ>
        <Champ>
          <Label htmlFor="email">E-mail :</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Champ>
        <Champ>
          <Label htmlFor="message">Message :</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Champ>
        <Button type="submit">Envoyer</Button>
      </Container>
    </Main>
  );
}
