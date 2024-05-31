"use client";

import splitStringUsingRegex from "@/utils/splitStringUsingRegexs";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const TitleMotion = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
`;

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Name = styled.h1`
  font-family: ${(props) => props.theme.fonts.extralight};
  line-height: 1em;
  font-size: 2em;
`;

const Job = styled(Name)`
  font-size: 3em;
  font-family: ${(props) => props.theme.fonts.medium};
  text-align: center;

  background: linear-gradient(
    to right,
    #87a9ed 20%,
    #b6faf7 40%,
    #b6faf7 60%,
    #87a9ed 80%
  );
  background-size: 250% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${TitleMotion} 5s ease-in-out infinite alternate;
`;

const Intro = styled(Name)`
  font-size: 1em;
`;

export function Title() {
  const name = "Jolan Poussier";
  const job = "Développeur Web";
  const intro = "Je créé des applications web avec NextJS.";

  const nameChars = splitStringUsingRegex(name);
  const jobChars = splitStringUsingRegex(job);
  const introChars = splitStringUsingRegex(intro);

  return (
    <>
      <Name>
        {nameChars.map((char, index) => (
          <motion.span
            initial="hidden"
            animate="reveal"
            key={index}
            transition={{ duration: 0, delay: index * 0.1 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </Name>
      <Job>
        {jobChars.map((char, index) => (
          <motion.span
            initial="hidden"
            animate="reveal"
            key={index}
            transition={{ duration: 0, delay: index * 0.1 + name.length * 0.1 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </Job>
      <Intro>
        {introChars.map((char, index) => (
          <motion.span
            initial="hidden"
            animate="reveal"
            key={index}
            transition={{
              duration: 0,
              delay: index * 0.05 + name.length * 0.1 + job.length * 0.1,
            }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </Intro>
    </>
  );
}
