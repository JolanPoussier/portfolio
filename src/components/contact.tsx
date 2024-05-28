"use client";

import sendEmail from "@/utils/sendEmail";
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
  line-height: normal;
  background: linear-gradient(to right, #87a9ed, #b6faf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Container = styled.form`
  width: 80%;
  margin: auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid white;
  padding: 1em;
  padding-top: 3em;
  border-radius: 12px;
`;

const Champ = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 2em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Label = styled.label`
  margin-right: 1em;
`;
const Input = styled.input`
  width: 80%;
  height: 50px;
  background: none;
  border: 1px solid white;
  border-radius: 12px;
  color: white;
  font-size: 1em;
  padding: 1em;
  &:focus {
    outline: none;
  }
`;
const Textarea = styled.textarea`
  width: 80%;
  height: 200px;
  background: none;
  border: 1px solid white;
  border-radius: 12px;
  color: white;
  font-size: 1em;
  padding: 1em;
  &:focus {
    outline: none;
  }
  resize: none;
`;
const Error = styled.span`
  color: red;
  margin: auto;
  margin-bottom: 2em;
`;

const Success = styled(Error)`
  color: green;
`;

const Button = styled.button`
  display: inline-block;
  margin: auto;
  align-self: center;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1em;
  color: black;
  padding: 0.7em;
  border-radius: 12px;
  border: 1px solid white;
  background: white;
  &:hover {
    color: white;
    background: none;
    cursor: pointer;
    transition: all 0.2s linear;
  }
`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    const response = await sendEmail({ name, email, message });
    if (response) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setError(true);
    }
  };

  return (
    <Main>
      <Title>Contact</Title>
      <Container onSubmit={handleSubmit}>
        <Champ>
          <Label htmlFor="name">Nom </Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom"
            required
          />
        </Champ>
        <Champ>
          <Label htmlFor="email">Email </Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@gmail.com"
            required
          />
        </Champ>
        <Champ>
          <Label htmlFor="message">Message </Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Renseignez votre message ici"
            required
          />
        </Champ>
        {error && <Error>Echec lors de l&apos;envoi du message.</Error>}
        {success && (
          <Success>
            Le message a bien été envoyé. J&apos;y répondrai au plus vite !
          </Success>
        )}
        <Button type="submit">Envoyer</Button>
      </Container>
    </Main>
  );
}
